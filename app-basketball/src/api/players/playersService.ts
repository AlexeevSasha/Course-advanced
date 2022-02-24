import {baseRequest} from "../baseRequest";
import {IAddPlayer} from "./playersDto";


export const getPlayers = () => {
    return baseRequest({
        url: "api/Player/GetPlayers",
        method: "GET",
        headers: {"Content-Type": "application/json"},
        isAuth: true
    })
}

export const addPlayers = (data: IAddPlayer) => {
    return baseRequest({
        url: "api/Player/Add",
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
        isAuth: true
    })
}