import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./reducer/homeSlice";

export const rootReducer = combineReducers({
  product: productReducer,
});
