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

export const addCommentToPost = createAsyncThunk(
  "auth/addCommentToPost",
  async (body) => {
    const url = `http://localhost:3000/comments/addCommentToPost`;

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
  }
);

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

export const getCommentsById = createAsyncThunk(
  "auth/getCommentsById",
  async (body) => {
    const url = `http://localhost:3000/comments/commentsByPost/${body}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
    });
    const myData = await response.json();

    return myData;
  }
);
export const getPostsByUserId = createAsyncThunk(
  "auth/getPostsByUserId",
  async (body) => {
    const url = `http://localhost:3000/posts/postsByUser/${body}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
    });
    const myData = await response.json();

    return myData;
  }
);
export const deleteComment = createAsyncThunk(
  "auth/deleteComment",
  async (id) => {
    const url = `http://localhost:3000/comments/deleteComment/${decodeURIComponent(
      id
    )}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
    });
    const myData = await response.json();

    return myData;
  }
);

export const createPost = createAsyncThunk("auth/createPost", async (body) => {
  const url = `http://localhost:3000/posts/createPost`;

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
export const deletePost = createAsyncThunk("auth/deletePost", async (id) => {
  const url = `http://localhost:3000/posts/deletePost/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "access-control-allow-origin": "*",
      "Content-Type": "application/json",
    },
  });
  const myData = await response.json();

  return myData;
});

const initialState = {
  postByIdData: {},
  allPostsData: {},
  likePostData: {},
  addCommentToPostData: {},
  getCommentsByIdData: {},
  createPostData: {},
  deletePostData: {},
  postsByUserIdData: {},
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
      .addCase(likePost.rejected, (state, action) => {})
      .addCase(addCommentToPost.pending, (state) => {})
      .addCase(addCommentToPost.fulfilled, (state, action) => {
        state.addCommentToPostData = action.payload;
      })
      .addCase(addCommentToPost.rejected, (state, action) => {})
      .addCase(getCommentsById.pending, (state) => {})
      .addCase(getCommentsById.fulfilled, (state, action) => {
        state.getCommentsByIdData = action.payload;
      })
      .addCase(getCommentsById.rejected, (state, action) => {})
      .addCase(deleteComment.pending, (state) => {})
      .addCase(deleteComment.fulfilled, (state, action) => {
        const deletedCommentId = action.payload.deletedPost.id;
        state.getCommentsByIdData.Table =
          state.getCommentsByIdData.Table.filter(
            (comment) => comment.id !== deletedCommentId
          );
      })
      .addCase(deleteComment.rejected, (state, action) => {})
      .addCase(createPost.pending, (state) => {})
      .addCase(createPost.fulfilled, (state, action) => {
        state.createPostData = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {})
      .addCase(deletePost.pending, (state) => {})
      .addCase(deletePost.fulfilled, (state, action) => {
        state.deletePostData = action.payload;
      })
      .addCase(deletePost.rejected, (state, action) => {})
      .addCase(getPostsByUserId.pending, (state) => {})
      .addCase(getPostsByUserId.fulfilled, (state, action) => {
        state.postsByUserIdData = action.payload;
      })
      .addCase(getPostsByUserId.rejected, (state, action) => {});
  },
});

export const { incrementLikes } = postSlice.actions;
export default postSlice.reducer;
