import { createSlice } from "@reduxjs/toolkit";

export const matrixDataSlice = createSlice({
  name: "matrixData",
  initialState: { data: [] },
  reducers: {
    cleanMatrix(state) {
      return (state = { data: [] });
    },
    set(state, action) {
      return { data: [...state.data, ...action.payload] };
    },
  },
});

export const { set, cleanMatrix } = matrixDataSlice.actions;
