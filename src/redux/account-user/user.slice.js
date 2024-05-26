import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api";

export const SignUpThunk = createAsyncThunk(
    "accountUser/fetchUserSignUp",
    async ({ username, password }) => {
        try {
            const response = await axiosInstance.post(`auth/signup`, { username, password });
            return {status: response.status, data: response.data};
        } catch (error) {
            return error.response.data;
        }
    }
)

export const LoginThunk = createAsyncThunk(
    "accountUser/fetchUserLogin",
    async({ username, password }) => {
        try {
            const response = await axiosInstance.post(`auth/login`, { username, password });
            const token = await response.data.data.token;
            // console.log(response.data.data);
            localStorage.setItem('accessToken', token);
            return { status: response.status};
        } catch (error) {
            return error.response.data;
        }
    }
)

export const LogoutThunk = createAsyncThunk(
    "accountUser/logout",
    async () => {
        localStorage.removeItem("accessToken");
    }
)

export const getCurrentUserThunk = createAsyncThunk(
    "accountUser/User",
    async() => {
        const response = await axiosInstance.get(`users/me`);
        return response.data.data.user;
        
    }
)


const accountUserSlice = createSlice({
    name: 'Users',
    initialState: {
        // userSignUp: {},
        // userLogin: {},
        currentUser: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // .addCase(SignUpThunk.fulfilled, (state, action) => {
            //     state.userSignUp = action.payload;
            // })
            .addCase(getCurrentUserThunk.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
            .addCase(LogoutThunk.fulfilled, (state) => {
                state.currentUser = null
            })
    }
});

export default accountUserSlice.reducer;
