import { createSlice } from "@reduxjs/toolkit";

export const inputDataSlice = createSlice({
  name: "inputData",
  initialState: {
    m: 0,
    n: 0,
    x: 0,
  },
  reducers: {
    set(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { set } = inputDataSlice.actions;
