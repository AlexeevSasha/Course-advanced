import {createSlice} from "@reduxjs/toolkit";
import { IGetPlayerResponse} from "../../api/players/playersDto";
import {getPlayersThunk , addPlayersThunk, getPlayerIdThunk, editPlayersThunk, deletelayersThunk } from "./playersAction";


interface ITeams {
    data: IGetPlayerResponse[];
    count: number;
    page: number;
    size: number;
}

interface IState {
    players: ITeams | null;
    player: IGetPlayerResponse | null;
    loadingPlayers: boolean;
    errorPlayers: boolean;
}


const initialState: IState = {
    players: null,
    player: null,
    loadingPlayers: false,
    errorPlayers: false,
};

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //getPlayers
        builder.addCase(getPlayersThunk .pending, (state) => {
            state.loadingPlayers = true;
        });
        builder.addCase(getPlayersThunk .fulfilled, (state, action) => {
            state.loadingPlayers = false;
            state.errorPlayers = false;
            state.players = action.payload
        });
        builder.addCase(getPlayersThunk .rejected, (state) => {
            state.loadingPlayers = false;
            state.errorPlayers = true;
        });

        //getPlayerId
        builder.addCase(getPlayerIdThunk .pending, (state) => {
            state.loadingPlayers = true;
        });
        builder.addCase(getPlayerIdThunk .fulfilled, (state, action) => {
            state.loadingPlayers = false;
            state.errorPlayers = false;
            state.player = action.payload
        });
        builder.addCase(getPlayerIdThunk .rejected, (state) => {
            state.loadingPlayers = false;
            state.errorPlayers = true;
        });

        //addPlayers
        builder.addCase(addPlayersThunk .pending, (state) => {
            state.loadingPlayers = true;
        });
        builder.addCase(addPlayersThunk .fulfilled, (state, action) => {
            state.loadingPlayers = false;
            state.errorPlayers = false;
        });
        builder.addCase(addPlayersThunk .rejected, (state) => {
            state.loadingPlayers = false;
            state.errorPlayers = true;
        });

        //editPlayers
        builder.addCase(editPlayersThunk .pending, (state) => {
            state.loadingPlayers = true;
        });
        builder.addCase(editPlayersThunk .fulfilled, (state, action) => {
            state.loadingPlayers = false;
            state.errorPlayers = false;
        });
        builder.addCase(editPlayersThunk .rejected, (state) => {
            state.loadingPlayers = false;
            state.errorPlayers = true;
        });

        //deletePlayers
        builder.addCase(deletelayersThunk .pending, (state) => {
            state.loadingPlayers = true;
        });
        builder.addCase(deletelayersThunk .fulfilled, (state, action) => {
            state.loadingPlayers = false;
            state.errorPlayers = false;
        });
        builder.addCase(deletelayersThunk .rejected, (state) => {
            state.loadingPlayers = false;
            state.errorPlayers = true;
        });
    }
})
export default playersSlice.reducer;

