import {createSlice} from "@reduxjs/toolkit";
import {IGetPlayer} from "../../api/players/playersDto";
import {getPlayersAction, addPlayersAction} from "./playersAction";


interface ITeams {
    data:IGetPlayer[];
    count: number;
    page: number;
    size: number;
}

interface IState {
    players: ITeams | null;
    player: IGetPlayer | null;
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
        builder.addCase(getPlayersAction.pending, (state) => {
            state.loadingPlayers = true;
        });
        builder.addCase(getPlayersAction.fulfilled, (state, action) => {
            state.loadingPlayers = false;
            state.errorPlayers = false;
            state.players = action.payload
        });
        builder.addCase(getPlayersAction.rejected, (state) => {
            state.loadingPlayers = false;
            state.errorPlayers = true;
        });
        //addPlayers
        builder.addCase(addPlayersAction.pending, (state) => {
            state.loadingPlayers = true;
        });
        builder.addCase(addPlayersAction.fulfilled, (state, action) => {
            state.loadingPlayers = false;
            state.errorPlayers = false;
        });
        builder.addCase(addPlayersAction.rejected, (state) => {
            state.loadingPlayers = false;
            state.errorPlayers = true;
        });
    }
})
export default playersSlice.reducer;

