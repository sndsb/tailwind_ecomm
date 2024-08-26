import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./reducer/homeSlice";
import siteSettingReducer from "./reducer/siteSettingSlice";

export const rootReducer = combineReducers({
  product: productReducer,
  siteSetting: siteSettingReducer,
});
