import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPostById = createAsyncThunk("auth/postById", async (body) => {
  console.log(body);
  const url = `http://localhost:3000/posts/postById/1`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "access-control-allow-origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const myData = await response.json();

  return myData;
});

export const likePost = createAsyncThunk("auth/likepost", async (body) => {
  console.log(body);
  const url = `http://localhost:3000/posts/likePost`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "access-control-allow-origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const myData = await response.json();

  return myData;
});

export const getAllPosts = createAsyncThunk(
  "auth/getAllPosts",
  async (body) => {
    console.log(body);
    const url = `http://localhost:3000/posts/getAllPosts`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const myData = await response.json();

    return myData;
  }
);

const initialState = {
  postByIdData: {},
  allPostsData: {},
  likePostData: {},
};

const postSlice = createSlice({
  name: "post",
  initialState,

  reducers: {
    incrementLikes: (state, action) => {
      const postId = action.payload;
      const post = state.allPostsData.Posts.find((item) => item.id === postId);
      if (post) {
        post.likesCount += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostById.pending, (state) => {})
      .addCase(getPostById.fulfilled, (state, action) => {
        state.postByIdData = action.payload;
      })
      .addCase(getPostById.rejected, (state, action) => {})
      .addCase(getAllPosts.pending, (state) => {})
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.allPostsData = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {})
      .addCase(likePost.pending, (state) => {})
      .addCase(likePost.fulfilled, (state, action) => {
        state.likePostData = action.payload;

        const likedPostId = action.payload.id;
        state.allPostsData.Posts.forEach((post) => {
          if (post.id === likedPostId) {
            post.likesCount += 1;
          }
        });
      })
      .addCase(likePost.rejected, (state, action) => {});
  },
});

export const { incrementLikes } = postSlice.actions;
export default postSlice.reducer;
