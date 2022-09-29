import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, signupThunk } from "../actions/user";

const initialState = {
  loginData: null,
  loginLoading: false, //로그인 시도 중
  loginDone: false, //로그인 완료
  signupData: null,
  signupLoading: false, //회원가입 시도 중
  signupDone: false, //회원가입 완료
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.loginDone = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.loginLoading = true;
        state.loginDone = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.loginDone = true;
        state.loginData = action.payload;
      })
      .addCase(signupThunk.pending, (state, action) => {
        state.signupLoading = true;
        state.signupDone = false;
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        state.signupLoading = false;
        state.signupDone = true;
        state.signupData = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
