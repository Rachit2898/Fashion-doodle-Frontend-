import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl, useApiToken } from "../../utils/utils";

export const fetchData = createAsyncThunk("design/fetchData", async () => {
  const response = await fetch("your/api/endpoint");
  const data = await response.json();
  return data;
});

const initialState = {};

const designSlice = createSlice({
  name: "design",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {})
      .addCase(fetchData.fulfilled, (state, action) => {})
      .addCase(fetchData.rejected, (state, action) => {});
  },
});

export const {} = designSlice.actions;
export default designSlice.reducer;
