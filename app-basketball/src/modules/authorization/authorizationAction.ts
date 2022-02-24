import {createAsyncThunk} from "@reduxjs/toolkit";
import {ISignUp, ISignIn} from "../../api/auth/authDto";
import {signIn, signUp} from "../../api/auth/authService";


export const registerAction = createAsyncThunk(
    "auth/signUp",
    async (data: ISignUp, thunkApi) => {
        try {
            const response = await signUp(data);
            localStorage.setItem("user", JSON.stringify(response));
            return response;
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.message)
        }

    },
);

export const loginAction = createAsyncThunk(
    "auth/signIn",
    async (data: ISignIn,thunkApi) => {
        try {
            const response = await signIn(data);
            localStorage.setItem("user", JSON.stringify(response));
            return response;
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.message)
        }

    },
);