import {createAsyncThunk} from "@reduxjs/toolkit";
import {addTeam, getTeams} from "../../api/teams/teamsServise";
import {IAddTeam} from "../../api/teams/teamsDto";

interface IRest {
    page? :number
    pageSize?:  number,
    name?:string;
}

export const getTeamsAction = createAsyncThunk(
    "teams/getTeams",
    async () => {
        try {
            const response = await getTeams();
            return response;
        } catch (e: any) {
            return new Error(e)
            // return thunkApi.rejectWithValue(e.message)
        }
    },
);

export const addTeamAction = createAsyncThunk(
    "teams/addTeam",
    async (data :IAddTeam, thunkApi) => {
        try {
            const response = await addTeam(data);
            return response;
        } catch (e: any) {
            return thunkApi.rejectWithValue(e.message)
        }
    },
);

export const teamOptionAction = createAsyncThunk(
    "teams/teamOption",
    async () => {
        try {
            const response = await getTeams();
            return response;
        } catch (e: any) {
            return new Error(e)
            // return thunkApi.rejectWithValue(e.message)
        }
    },
);

