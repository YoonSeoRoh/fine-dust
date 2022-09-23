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
  reducers: {
    getRegion: (state, action) => {},
  },
  extraReducers: {},
});

export default dataSlice.reducer;
