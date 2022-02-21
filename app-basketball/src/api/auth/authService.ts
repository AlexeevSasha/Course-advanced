import {baseRequest} from "../baseRequest";
import {ISignIn, ISignUp} from "./authDto";

export const signIn = async (data:ISignIn) => {
    try {
        const response = await baseRequest({
            url: "api/Auth/SignIn",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        if (response.status === 401) {
            throw new Error('Wrong login or password')
        }
        if (!response.ok) {
            throw new Error(response.status.toString())
        }

        console.log(response.json())
    } catch (error : any) {
        console.log(error.message)
    }
}

export const signUp = async (data:ISignUp) => {
    try {
        const response = await baseRequest({
            url: "api/Auth/SignUp",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        if (response.status === 409) {
            throw new Error('User already registered')
        }
        if (!response.ok) {
            throw new Error(response.status.toString())
        }
        return response.json()
    } catch (error : any) {
        console.log(error.message)
    }
}