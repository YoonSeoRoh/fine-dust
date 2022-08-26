import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDataThunk = createAsyncThunk(
  "getData",
  async (numOfRows, pageNo, sidoName) => {
    const response = await fetch(
      `B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${process.env.REACT_APP_KEY}&&returnType=json&numOfRows=${numOfRows}&pageNo=${pageNo}&sidoName=${sidoName}&ver=1.0`
    );
    return response.data;
  }
);
