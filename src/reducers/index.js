import { combineReducers } from "@reduxjs/toolkit";

import dataSlice from "./data";
import bookmarkSlice from "./bookmark";
import userSlice from "./user";

const rootReducer = combineReducers({
  data: dataSlice,
  bookmark: bookmarkSlice,
  user: userSlice,
});

export default rootReducer;
