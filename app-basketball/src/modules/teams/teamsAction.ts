import {createAsyncThunk} from "@reduxjs/toolkit";
import {addTeam, deleteTeam, getTeamId, getTeams, upDateTeam} from "../../api/teams/teamsServise";
import {IAddTeam, IGetTeams} from "../../api/teams/teamsDto";

interface IRest {
    page?: number
    pageSize?: number,
    name?: string;
}

export const getTeamsThunk = createAsyncThunk(
    "teams/getTeams",
    async () => {
        const response = await getTeams();
        return response;
    },
);

export const getTeamIdThunk = createAsyncThunk(
    "teams/getTeamId",
    async (id: number) => {
        const response = await getTeamId(id);
        return response;
    },
);

export const addTeamThunk = createAsyncThunk(
    "teams/addTeam",
    async (data: IAddTeam) => {
        const response = await addTeam(data);
        return response;
    },
);

export const editTeamThunk = createAsyncThunk(
    "teams/editTeam",
    async (data: IGetTeams) => {
        const response = await upDateTeam(data);
        return response;
    },
);

export const deleteTeamThunk = createAsyncThunk(
    "teams/deleteTeam",
    async (id: number) => {
        const response = await deleteTeam(id);
        return response;
    },
);


export const teamOptionThunk = createAsyncThunk(
    "teams/teamOption",
    async () => {
        const response = await getTeams();
        return response;
    },
);

