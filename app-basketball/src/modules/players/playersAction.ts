import {createAsyncThunk} from "@reduxjs/toolkit";
import {addPlayers, getPlayerId, getPlayers, upDatePlayer, deletePlayer} from "../../api/players/playersService";
import {IAddPlayer, IGetPlayer} from "../../api/players/playersDto";



interface IRest {
    page? :number
    pageSize?:  number,
    name?:string;
    filterTeams?: string
}

export const getPlayersThunk  = createAsyncThunk(
    "players/getPlayers",
    async () => {
        try {
            const response = await getPlayers();
            return response;
        } catch (e: any) {
            return new Error(e)
            // return thunkApi.rejectWithValue(e.message)
        }
    },
);

export const getPlayerIdThunk  = createAsyncThunk(
    "players/getPlayerId",
    async (id : number) => {
        try {
            const response = await getPlayerId(id);
            return response;
        } catch (e: any) {
            return new Error(e)
            // return thunkApi.rejectWithValue(e.message)
        }
    },
);
export const addPlayersThunk  = createAsyncThunk(
    "players/addPlayers",
    async (data :IAddPlayer, thunkApi) => {
        try {
            const response = await addPlayers(data);
            return response;
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.message)
        }
    },
);

export const editPlayersThunk  = createAsyncThunk(
    "players/editPlayers",
    async (data :IGetPlayer, thunkApi) => {
        try {
            const response = await upDatePlayer(data);
            return response;
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.message)
        }
    },
);

export const deletelayersThunk  = createAsyncThunk(
    "players/deletePlayers",
    async (id :number, thunkApi) => {
        try {
            const response = await deletePlayer(id);
            return response;
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.message)
        }
    },
);


