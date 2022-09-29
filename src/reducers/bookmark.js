import { createSlice } from "@reduxjs/toolkit";
import {
  getBookMarkThunk,
  addBookMarkThunk,
  deleteBookMarkThunk,
} from "../actions/bookmark";

const initialState = {
  bookmarkData: [],
  getBookMarkLoading: false,
  getBookMarkDone: false,
  addBookMarkLoading: false,
  addBookMarkDone: false,
  deleteBookMarkLoading: false,
  deleteBookMarkDone: false,
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBookMarkThunk.pending, (state) => {
        state.getBookMarkLoading = true;
        state.getBookMarkDone = false;
      })
      .addCase(getBookMarkThunk.fulfilled, (state, action) => {
        state.getBookMarkLoading = false;
        state.getBookMarkDone = true;
        state.bookmarkData = action.payload;
      })
      .addCase(addBookMarkThunk.pending, (state) => {
        state.addBookMarkLoading = true;
        state.addBookMarkDone = false;
      })
      .addCase(addBookMarkThunk.fulfilled, (state, action) => {
        state.addBookMarkLoading = false;
        state.addBookMarkDone = true;
      })
      .addCase(deleteBookMarkThunk.pending, (state) => {
        state.deleteBookMarkLoading = true;
        state.deleteBookMarkDone = false;
      })
      .addCase(deleteBookMarkThunk.fulfilled, (state, action) => {
        state.deleteBookMarkLoading = false;
        state.deleteBookMarkDone = true;
      });
  },
});

export default bookmarkSlice.reducer;
