import {createAsyncThunk} from "@reduxjs/toolkit";
import {addPlayers, getPlayerId, getPlayers, upDatePlayer, deletePlayer} from "../../api/players/playersService";
import {IAddPlayer, IGetPlayer} from "../../api/players/playersDto";


interface IRest {
    page?: number
    pageSize?: number,
    name?: string;
    filterTeams?: string
}

export const getPlayersThunk = createAsyncThunk(
    "players/getPlayers",
    async () => {
        const response = await getPlayers();
        return response;
    },
);

export const getPlayerIdThunk = createAsyncThunk(
    "players/getPlayerId",
    async (id: number) => {
        const response = await getPlayerId(id);
        return response;
    },
);
export const addPlayersThunk = createAsyncThunk(
    "players/addPlayers",
    async (data: IAddPlayer, thunkApi) => {
            const response = await addPlayers(data);
            return response;
    },
);

export const editPlayersThunk = createAsyncThunk(
    "players/editPlayers",
    async (data: IGetPlayer, thunkApi) => {
            const response = await upDatePlayer(data);
            return response;
    },
);

export const deletelayersThunk = createAsyncThunk(
    "players/deletePlayers",
    async (id: number, thunkApi) => {
            const response = await deletePlayer(id);
            return response;
    },
);


