import {IAddTeam, IGetTeams} from "./teamsDto";
import {get, post, remove, put} from "../baseRequest";

const user =  JSON.parse(`${localStorage.getItem("user")}`)
export const getTeams = () => get('api/Team/GetTeams', user.token);
export const getTeamId = (id: number) => get(`api/Team/Get?id=${id}`, user.token);
export const addTeam = (data: IAddTeam) => post("api/Team/Add", JSON.stringify(data), user.token);
export const upDateTeam = (data: IGetTeams) => put("api/Team/Update", JSON.stringify(data), user.token);
export const deleteTeam = (id: number) => remove(`api/Team/Delete?id=${id}`, user.token);
