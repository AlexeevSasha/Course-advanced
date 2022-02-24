import { createSlice } from "@reduxjs/toolkit";
import {IUserResponse} from "../../api/auth/authDto";
import { loginAction, registerAction } from './authorizationAction'

interface IAuth {
    user: IUserResponse | null;
    loadingAuth: boolean;
    errorAuth: boolean;
}

const initialState: IAuth = {
    user: JSON.parse(`${localStorage.getItem("user")}`) || null,
    loadingAuth: false,
    errorAuth: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signOut(state): void {
            localStorage.removeItem("user");
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        //singIn
        builder.addCase(loginAction.pending, (state) => {
            state.loadingAuth = true;
            state.errorAuth = false;
        });
        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.loadingAuth = false;
            state.errorAuth = false;
            state.user = action.payload;
        });
        builder.addCase(loginAction.rejected, (state) => {
            state.loadingAuth = false;
            state.errorAuth = true;
        });
        //singUp
        builder.addCase(registerAction.pending, (state) => {
            state.loadingAuth = true;
            state.errorAuth = false;
        });
        builder.addCase(registerAction.fulfilled, (state, action) => {
            state.loadingAuth = false;
            state.errorAuth = false;
            state.user = action.payload;
        });
        builder.addCase(registerAction.rejected, (state) => {
            state.loadingAuth = false;
            state.errorAuth = true;
        });

    }
})

export const { signOut } = authSlice.actions;
export default authSlice.reducer