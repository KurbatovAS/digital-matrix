import { createSlice } from "@reduxjs/toolkit";

export const matrixArraySlice = createSlice({
  name: "matrixArray",
  initialState: [],
  reducers: {
    cleanMatrix(state) {
      return (state = []);
    },
    set(state, action) {
      return [...state, ...action.payload];
    },
  },
});

export const { set, cleanMatrix } = matrixArraySlice.actions;
