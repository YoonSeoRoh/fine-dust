import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import dataSlice from "./data";
import bookmarkSlice from "./bookmark";
import userSlice from "./user";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  data: dataSlice,
  bookmark: bookmarkSlice,
  user: userSlice,
});

export default persistReducer(persistConfig, rootReducer);
