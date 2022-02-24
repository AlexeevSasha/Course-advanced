import {createSlice} from "@reduxjs/toolkit";
import {IGetTeams} from "../../api/teams/teamsDto";
import {getTeamsAction, addTeamAction, teamOptionAction} from "./teamsAction";

interface IOption {
    value: number;
    label: string;
    id: number;
}

interface ITeams {
    data:IGetTeams[];
    count: number;
    page: number;
    size: number;
}

interface IState {
    teams: ITeams | null;
    team: IGetTeams | null;
    teamOption: IOption[];
    loadingTeams: boolean;
    errorTeams: boolean;
}


const initialState: IState = {
    teams: null,
    team: null,
    teamOption: [],
    loadingTeams: false,
    errorTeams: false,
};

export const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //getTeams
        builder.addCase(getTeamsAction.pending, (state) => {
            state.loadingTeams = true;
        });
        builder.addCase(getTeamsAction.fulfilled, (state, action) => {
            state.loadingTeams = false;
            state.errorTeams = false;
            state.teams = action.payload;
        });
        builder.addCase(getTeamsAction.rejected, (state) => {
            state.loadingTeams = false;
            state.errorTeams = true;
        });
        //addteam
        builder.addCase(addTeamAction.pending, (state) => {
            state.loadingTeams = true;
        });
        builder.addCase(addTeamAction.fulfilled, (state, action) => {
            state.loadingTeams = false;
            state.errorTeams = false;
        });
        builder.addCase(addTeamAction.rejected, (state) => {
            state.loadingTeams = false;
            state.errorTeams = true;
        });
        //teamOption
        builder.addCase(teamOptionAction.pending, (state) => {
            state.loadingTeams = true;
        });
        builder.addCase(teamOptionAction.fulfilled, (state, action) => {
            state.loadingTeams = false;
            state.errorTeams = false;
            state.teamOption = action.payload.data.map((elem : IGetTeams) => ({value: elem.id, label: elem.name}))
        });
        builder.addCase(teamOptionAction.rejected, (state) => {
            state.loadingTeams = false;
            state.errorTeams = true;
        });
    }
})
export default teamsSlice.reducer;

