import { combineReducers } from "@reduxjs/toolkit";
import dataSlice from "./data";
import bookmarkSlice from "./bookmark";

const rootReducer = combineReducers({
  data: dataSlice.reducer,
  bookmark: bookmarkSlice.reducer,
});

export default rootReducer;
