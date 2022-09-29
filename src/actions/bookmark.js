import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBookMarkThunk = createAsyncThunk("GET_BOOKMARK", async () => {
  const response = await fetch("http://localhost:8888/bookmark");
  const data = await response.json();
  return data;
});

export const addBookMarkThunk = createAsyncThunk(
  "ADD_BOOKMARK",
  async (formData) => {
    const response = await fetch("http://localhost:8888/bookmark", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  }
);

export const deleteBookMarkThunk = createAsyncThunk(
  "DELETE_BOOKMARK",
  async (id) => {
    const response = await fetch(`http://localhost:8888/bookmark/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  }
);
