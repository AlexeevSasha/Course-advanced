import {baseRequest} from "../baseRequest";
import {ISignIn, ISignUp} from "./authDto";

export const signIn = (data: ISignIn) => {
    return baseRequest({
        url: "api/Auth/SignIn",
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
        isAuth: false
    })
}

export const signUp = (data: ISignUp) => {
    return baseRequest({
        url: "api/Auth/SignUp",
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
        isAuth: false
    })
}