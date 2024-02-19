import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllRole = createAsyncThunk("auth/getAllRoles", async () => {
  const url = `http://localhost:3000/roles/getAllRole`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "access-control-allow-origin": "*",
      "Content-Type": "application/json",
    },
  });
  const myData = await response.json();

  return myData;
});

export const signUp = createAsyncThunk("auth/signUp", async (body) => {
  console.log(body);
  const url = `http://localhost:3000/auth/sign-up`;

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

export const signIn = createAsyncThunk("auth/sign-in", async (body) => {
  console.log(body);
  const url = `http://localhost:3000/auth/sign-in`;

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
export const getUserByToken = createAsyncThunk(
  "auth/getUserByToken",
  async (body) => {
    try {
      const url = "http://localhost:3000/auth/get-user-by-token";

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${body}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const myData = await response.json();
      return myData;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
);

const initialState = {
  allRoles: {},
  loading: false,
  signUpData: {},
  signInData: {},
  error: "",
  getUserByTokenData: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRole.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllRole.fulfilled, (state, action) => {
        state.loading = false;
        state.allRoles = action.payload;
      })
      .addCase(getAllRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.signUpData = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.signInData = action.payload;
        localStorage.setItem("token", action.payload.access_token);
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUserByToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserByToken.fulfilled, (state, action) => {
        state.loading = false;
        state.getUserByTokenData = action.payload;
        localStorage.setItem("userId", action.payload.id);
      })
      .addCase(getUserByToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.getUserByTokenData = action.payload;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
