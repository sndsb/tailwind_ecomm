import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { homeService } from "../actions/home-action";

const initialState = {
  productData: {},
  isLoading: true,
};

export const getProductsData = createAsyncThunk(
  "get_all_home_data",
  async (thunkAPI) => {
    try {
      return await homeService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line no-unused-vars
      .addCase(getProductsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productData = action?.payload?.data?.products;
      })
      .addCase(getProductsData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

const productReducer = productSlice.reducer;

export default productReducer;
