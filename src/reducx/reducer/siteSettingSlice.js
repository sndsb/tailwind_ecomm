import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { homeService } from "../actions/home-action";

const initialState = {
  siteSettingData: {},
  isLoading: true,
};

export const getSetiteSettingData = createAsyncThunk(
  "get_product_data",
  async (thunkAPI) => {
    try {
      return await homeService.getSiteSetting();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const siteSettingSlice = createSlice({
  name: "siteSetting",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line no-unused-vars
      .addCase(getSetiteSettingData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSetiteSettingData.fulfilled, (state, siteAction) => {
        state.isLoading = false;
        state.siteSettingData = siteAction.payload?.data;
      })
      .addCase(getSetiteSettingData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

const siteSettingReducer = siteSettingSlice.reducer;

export default siteSettingReducer;
