import { configureStore } from "@reduxjs/toolkit";

import { inputDataSlice } from "./inputData/slice";
import { matrixArraySlice } from "./matrixArray/slice";

export const store = configureStore({
  reducer: {
    inputData: inputDataSlice.reducer,
    matrixArray: matrixArraySlice.reducer,
  },
});
