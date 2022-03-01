import {createSlice} from "@reduxjs/toolkit";
import {IGetTeams} from "../../api/teams/teamsDto";
import {getTeamsThunk, addTeamThunk, teamOptionThunk, getTeamIdThunk, deleteTeamThunk, editTeamThunk} from "./teamsAction";

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
    errorTeams: boolean | string | undefined;
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
        builder.addCase(getTeamsThunk.pending, (state) => {
            state.loadingTeams = true;
        });
        builder.addCase(getTeamsThunk.fulfilled, (state, action) => {
            state.loadingTeams = false;
            state.errorTeams = false;
            state.teams = action.payload;
        });
        builder.addCase(getTeamsThunk.rejected, (state) => {
            state.loadingTeams = false;
            state.errorTeams = true;
        });

        //getTeamId
        builder.addCase(getTeamIdThunk.pending, (state) => {
            state.loadingTeams = true;
        });
        builder.addCase(getTeamIdThunk.fulfilled, (state, action) => {
            state.team = action.payload;
            state.loadingTeams = false;
            state.errorTeams = false;
        });
        builder.addCase(getTeamIdThunk.rejected, (state) => {
            state.loadingTeams = false;
            state.errorTeams = true;
        });

        //addteam
        builder.addCase(addTeamThunk.pending, (state) => {
            state.loadingTeams = true;
        });
        builder.addCase(addTeamThunk.fulfilled, (state, action) => {
            state.loadingTeams = false;
            state.errorTeams = false;
        });
        builder.addCase(addTeamThunk.rejected, (state, action) => {
            state.loadingTeams = false;
            console.log(action.error.message)
            state.errorTeams = true;
        });

        //editteam
        builder.addCase(editTeamThunk.pending, (state) => {
            state.loadingTeams = true;
        });
        builder.addCase(editTeamThunk.fulfilled, (state, action) => {
            state.loadingTeams = false;
            state.errorTeams = false;
        });
        builder.addCase(editTeamThunk.rejected, (state,) => {
            state.loadingTeams = false;
            state.errorTeams = false;
        });

        //deleteTeam
        builder.addCase(deleteTeamThunk.pending, (state) => {
            state.loadingTeams = true;
        });
        builder.addCase(deleteTeamThunk.fulfilled, (state, action) => {
            state.loadingTeams = false;
            state.errorTeams = false;
        });
        builder.addCase(deleteTeamThunk.rejected, (state) => {
            state.loadingTeams = false;
            state.errorTeams = true;
        });

        //teamOption
        builder.addCase(teamOptionThunk.pending, (state) => {
            state.loadingTeams = true;
        });
        builder.addCase(teamOptionThunk.fulfilled, (state, action) => {
            state.loadingTeams = false;
            state.errorTeams = false;
            state.teamOption = action.payload.data.map((elem : IGetTeams) => ({value: elem.id, label: elem.name}))
        });
        builder.addCase(teamOptionThunk.rejected, (state) => {
            state.loadingTeams = false;
            state.errorTeams = true;
        });
    }
})
export default teamsSlice.reducer;

