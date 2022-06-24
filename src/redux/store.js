import { configureStore } from "@reduxjs/toolkit";

import { inputDataSlice } from "./inputData/slice";
import { matrixDataSlice } from "./matrixData/slice";

export const store = configureStore({
  reducer: {
    inputData: inputDataSlice.reducer,
    matrixData: matrixDataSlice.reducer,
  },
});
