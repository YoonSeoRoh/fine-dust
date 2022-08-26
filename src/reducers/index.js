import { combineReducers } from "@reduxjs/toolkit";
import bookmarkSlice from "./BookMark";
import dataSlice from "./data";

const rootReducer = combineReducers({
  data: dataSlice,
  bookmark: bookmarkSlice,
});

export default rootReducer;
