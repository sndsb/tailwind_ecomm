import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { homeService } from "../actions/home-action";

const initialState = {
    user: [],
    isAuthenticated: false,
    isLoading: true,
    error: false, 
};

export const loginUser = createAsyncThunk(
    "login/auth_login",
    async (formData, thunkAPI) => {
        try {
            const response = await homeService.login(formData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue({
                message: error.response?.data?.message || "An unexpected error occurred",
            });
        }
    }
);

export const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = false; 
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message || "An error occurred";
                console.log('Error:', state.error);
            });
    },
});

const loginReducer = loginSlice.reducer;

export default loginReducer;
