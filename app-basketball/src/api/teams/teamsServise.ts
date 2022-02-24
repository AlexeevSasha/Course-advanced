import {baseRequest} from "../baseRequest";
import {IAddTeam} from "./teamsDto";




export const getTeams = () => {
    return baseRequest({
        url: "api/Team/GetTeams",
        method: "GET",
        headers: {"Content-Type": "application/json"},
        isAuth: true
    })
}

export const addTeam = (data: IAddTeam) => {
    return baseRequest({
        url: "api/Team/Add",
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
        isAuth: true
    })
}