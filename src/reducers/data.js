import { createSlice } from "@reduxjs/toolkit";
import { getDataThunk } from "../actions/data";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: {
    [getDataThunk.pending](state, action) {
      state.loading = true;
    },
    [getDataThunk.fulfilled](state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    [getDataThunk.rejected](state, action) {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default dataSlice;
