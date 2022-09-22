import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: [],
  reducers: {
    addBookmark: (state, action) => {
      const nextId =
        state.length !== 0 ? Math.max(...state.map((item) => item.id)) + 1 : 0;
      state.push({ id: nextId, data: action.payload });
    },
    removeBookmark: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    removeAllBookmark: (state, action) => {
      return (state = []);
    },
  },
});

export const { addBookmark, removeBookmark, removeAllBookmark } =
  bookmarkSlice.actions;
export default bookmarkSlice;
