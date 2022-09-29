import { createSlice } from "@reduxjs/toolkit";
import { getDataThunk } from "../actions/data";

const initialState = {
  loading: false,
  dustData: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDataThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getDataThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.dustData = action.payload;
      });
  },
});

export default dataSlice.reducer;
