import {post, get, put, remove} from "../baseRequest";
import {IAddPlayer, IGetPlayer} from "./playersDto";


const user =  JSON.parse(`${localStorage.getItem("user")}`)

export const getPlayers = () => get('api/Player/GetPlayers', user.token)
export const addPlayers = (data: IAddPlayer) => post('api/Player/Add',JSON.stringify(data), user.token)
export const getPlayerId = (id: number) => get(`api/Player/Get?id=${id}`, user.token);
export const upDatePlayer = (data: IGetPlayer) => put("api/Player/Update", JSON.stringify(data), user.token);
export const deletePlayer = (id: number) => remove(`api/Player/Delete?id=${id}`, user.token);