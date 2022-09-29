import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk("LOGIN", async (formData) => {
  const response = await fetch("http://localhost:8888/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  return data;
});

export const signupThunk = createAsyncThunk("SIGN_UP", async (formData) => {
  const response = await fetch("http://localhost:8888/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  return data;
});
