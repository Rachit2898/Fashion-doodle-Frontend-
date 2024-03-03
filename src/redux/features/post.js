import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl, useApiToken } from "../../utils/utils";

export const getPostById = createAsyncThunk("auth/postById", async (body) => {
  const url = `${apiUrl}/posts/postById/${body.id}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "access-control-allow-origin": "*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + body.token,
    },
  });
  const myData = await response.json();

  return myData;
});

export const likePost = createAsyncThunk("auth/likepost", async (body) => {
  const url = `${apiUrl}/posts/likePost`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "access-control-allow-origin": "*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + body.token,
    },
    body: JSON.stringify(body.data),
  });
  const myData = await response.json();

  return myData;
});

export const addCommentToPost = createAsyncThunk(
  "auth/addCommentToPost",
  async (body) => {
    const url = `${apiUrl}/comments/addCommentToPost`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + body.token,
      },
      body: JSON.stringify(body.data),
    });
    const myData = await response.json();

    return myData;
  }
);

export const getAllPosts = createAsyncThunk(
  "auth/getAllPosts",
  async (token) => {
    const url = "http://89.116.121.207:4000/posts/getAllPost";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const myData = await response.json();
      console.log("Response Data:", myData);

      return myData;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  }
);

export const getCommentsById = createAsyncThunk(
  "auth/getCommentsById",
  async (body) => {
    const url = `${apiUrl}/comments/commentsByPost/${body.id}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + body.token,
      },
    });
    const myData = await response.json();

    return myData;
  }
);
export const getPostsByUserId = createAsyncThunk(
  "auth/getPostsByUserId",
  async (body) => {
    console.log("shcbdhjbdfhvbfvefv", body.token);
    const url = `${apiUrl}/posts/postsByUser/${body.id}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + body.token,
      },
    });
    const myData = await response.json();

    return myData;
  }
);
export const deleteComment = createAsyncThunk(
  "auth/deleteComment",
  async (body) => {
    const url = `${apiUrl}/comments/deleteComment/${decodeURIComponent(
      body.id
    )}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + body.token,
      },
    });
    const myData = await response.json();

    return myData;
  }
);

export const createPost = createAsyncThunk("auth/createPost", async (body) => {
  const url = `${apiUrl}/posts/createPost`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "access-control-allow-origin": "*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + body.token,
    },
    body: JSON.stringify(body.data),
  });
  const myData = await response.json();

  return myData;
});
export const deletePost = createAsyncThunk("auth/deletePost", async (body) => {
  const url = `${apiUrl}/posts/deletePost/${body.id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "access-control-allow-origin": "*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + body.token,
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
      const post = state?.allPostsData?.Table?.find(
        (item) => item.id === postId
      );
      if (post) {
        post.likesCount += 1;
      }
    },
    incrementComments: (state, action) => {
      const postId = action.payload;
      const post = state?.allPostsData?.Table?.find(
        (item) => item.id === postId
      );
      if (post) {
        post.commentsCount += 1;
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
        state.allPostsData?.Table?.forEach((post) => {
          if (post.id === likedPostId) {
            post.likesCount += 1;
          }
        });
      })
      .addCase(likePost.rejected, (state, action) => {})
      .addCase(addCommentToPost.pending, (state) => {})
      .addCase(addCommentToPost.fulfilled, (state, action) => {
        state.addCommentToPostData = action.payload;
        // state.getCommentsByIdData?.Table.push(action.payload?.Table);
        console.log("smndcbdscvfvbfehvbhejfb", action.payload);
        const likedPostId = action.payload.Table.postId;
        console.log("smndcbdscvfvbfehvbhejfbddddd", state.allPostsData);
        state.allPostsData?.Table?.forEach((post) => {
          if (post.id === likedPostId) {
            post.commentsCount += 1;
          }
        });
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
          state.getCommentsByIdData?.Table.filter(
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
