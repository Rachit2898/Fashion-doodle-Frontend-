import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("model/fetchData", async () => {
  const response = await fetch("your/api/endpoint");
  const data = await response.json();
  return data;
});

const initialState = {};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {})
      .addCase(fetchData.fulfilled, (state, action) => {})
      .addCase(fetchData.rejected, (state, action) => {});
  },
});

export const {} = modelSlice.actions;
export default modelSlice.reducer;
