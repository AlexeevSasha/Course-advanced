import {createAsyncThunk} from "@reduxjs/toolkit";
import {addPlayers, getPlayers} from "../../api/players/playersService";
import {IAddPlayer} from "../../api/players/playersDto";


interface IRest {
    page? :number
    pageSize?:  number,
    name?:string;
    filterTeams?: string
}

export const getPlayersAction = createAsyncThunk(
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

export const addPlayersAction = createAsyncThunk(
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
