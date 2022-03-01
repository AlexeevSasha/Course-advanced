import {createAsyncThunk} from "@reduxjs/toolkit";
import {addTeam, deleteTeam, getTeamId, getTeams, upDateTeam} from "../../api/teams/teamsServise";
import {IAddTeam, IGetTeams} from "../../api/teams/teamsDto";

interface IRest {
    page? :number
    pageSize?:  number,
    name?:string;
}

export const getTeamsThunk = createAsyncThunk(
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

export const getTeamIdThunk = createAsyncThunk(
    "teams/getTeamId",
    async (id : number ) => {
        try {
            const response = await getTeamId(id);
            return response;
        } catch (e: any) {
            return new Error(e)
            // return thunkApi.rejectWithValue(e.message)
        }
    },
);

export const addTeamThunk = createAsyncThunk(
    "teams/addTeam",
    async (data :IAddTeam) => {
            const response = await addTeam(data);
            return response;
    },
);

export const editTeamThunk = createAsyncThunk(
    "teams/editTeam",
    async (data: IGetTeams) => {
        try {
            const response = await upDateTeam(data);
            return response;
        } catch (e: any) {
            console.log(5)
        }
    },
);

export const deleteTeamThunk = createAsyncThunk(
    "teams/deleteTeam",
    async (id : number) => {
        try {
            const response = await deleteTeam(id);
            return response;
        } catch (e: any) {
            console.log(5)
        }
    },
);


export const teamOptionThunk = createAsyncThunk(
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

