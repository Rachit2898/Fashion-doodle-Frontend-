import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";
import { apiUrl, useApiToken } from "../../utils/utils";

export const fetchData = createAsyncThunk("user/fetchData", async () => {
  const response = await fetch("your/api/endpoint");
  const data = await response.json();
  return data;
});

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async () => {
    const snapshot = await firebase.firestore().collection("messages").get();
    console.log(snapshot.docs);
    return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  }
);

export const getAllUsers = createAsyncThunk(
  "/users/getAllUsers",
  async (token) => {
    const url = `${apiUrl}/users/getAllUsers`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "access-control-allow-origin": "*",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const myData = await response.json();
      return myData;
    } catch (error) {
      console.error("Error during request:", error.message);
      throw error;
    }
  }
);

export const addFollowing = createAsyncThunk(
  "/users/addFollowing",

  async (body) => {
    console.log(body);
    const url = `${apiUrl}/users/addFollowing`;

    const response = await fetch(url, {
      method: "PUT",
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
export const removeFollowing = createAsyncThunk(
  "/users/removeFollowing",

  async (body) => {
    console.log(body);
    const url = `${apiUrl}/users/removeFollowing`;

    const response = await fetch(url, {
      method: "PUT",
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
export const getUserById = createAsyncThunk(
  "/users/getUserById",

  async (body) => {
    const url = `${apiUrl}/users/getUserById/${body.id}`;

    console.log(body);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "access-control-allow-origin": "*",
          "Content-Type": "application/json",
          Authorization: "Bearer " + body.token,
        },
      });

      if (response.ok) {
        const myData = await response.json();

        return myData;
      } else {
        console.error("Error fetching data");
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }
);

export const getFollowers = createAsyncThunk(
  "/users/getFollowers",
  async (body) => {
    const url = `${apiUrl}/users/getUserFollowers/${body.id}`;

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
export const getFollowings = createAsyncThunk(
  "/users/getFollowings",
  async (body) => {
    const url = `${apiUrl}/users/getUserFollowing/${body.id}`;

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

const initialState = {
  messages: [],
  getAllUsersData: {},
  status: "",
  getUserByIdData: {},
  getFollowersData: {},
  getFollowingData: {},
  profileUserId: "",
  followingUserId: "",
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setUserProfileId: (state, action) => {
      state.profileUserId = action.payload;
      localStorage.setItem("profileUserId", action.payload.id);
    },
    setUserFollowingId: (state, action) => {
      state.followingUserId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {})
      .addCase(fetchData.fulfilled, (state, action) => {})
      .addCase(fetchData.rejected, (state, action) => {})
      .addCase(fetchMessages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.getAllUsersData = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getUserById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.getUserByIdData = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getFollowings.pending, (state) => {})
      .addCase(getFollowings.fulfilled, (state, action) => {
        state.getFollowingData = action.payload;
      })
      .addCase(getFollowings.rejected, (state, action) => {})
      .addCase(getFollowers.pending, (state) => {})
      .addCase(getFollowers.fulfilled, (state, action) => {
        state.getFollowersData = action.payload;
      })
      .addCase(getFollowers.rejected, (state, action) => {})
      .addCase(removeFollowing.pending, (state) => {})
      .addCase(removeFollowing.fulfilled, (state, action) => {
        state.getFollowingData.following =
          state.getFollowingData.following.filter(
            (user) => user.id !== state.followingUserId
          );
      })
      .addCase(removeFollowing.rejected, (state, action) => {})
      .addCase(addFollowing.pending, (state) => {
        state.loading = true;
      })
      .addCase(addFollowing.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addFollowing.rejected, (state, action) => {});
  },
});

export const { addMessage, setUserProfileId, setUserFollowingId } =
  userSlice.actions;
export default userSlice.reducer;
