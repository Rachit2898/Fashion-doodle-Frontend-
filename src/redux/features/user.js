import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";

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
  async (body) => {
    const url = `http://localhost:3000/users/getAllUsers`;

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
export const addFollowing = createAsyncThunk(
  "/users/addFollowing",

  async (body) => {
    console.log(body);
    const url = `http://localhost:3000/users/addFollowing`;

    const response = await fetch(url, {
      method: "PUT",
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
export const getUserById = createAsyncThunk(
  "/users/getUserById",

  async (id) => {
    const url = `http://localhost:3000/users/getUserById/${id}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "access-control-allow-origin": "*",
          "Content-Type": "application/json",
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
  async (id) => {
    const url = `http://localhost:3000/users/getUserFollowers/${id}`;

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
export const getFollowings = createAsyncThunk(
  "/users/getFollowings",
  async (id) => {
    const url = `http://localhost:3000/users/getUserFollowing/${id}`;

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

const initialState = {
  messages: [],
  getAllUsersData: {},
  status: "",
  getUserByIdData: {},
  getFollowersData: {},
  getFollowingData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
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
      .addCase(getFollowers.rejected, (state, action) => {});
  },
});

export const { addMessage } = userSlice.actions;
export default userSlice.reducer;
