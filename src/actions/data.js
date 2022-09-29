import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDataThunk = createAsyncThunk("GET_DATA", async (sidoName) => {
  const response = await fetch(
    `B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${process.env.REACT_APP_KEY}&&returnType=json&numOfRows=100&pageNo=1&sidoName=${sidoName}&ver=1.0`
  );
  const data = await response.json();
  return data.response.body;
});
