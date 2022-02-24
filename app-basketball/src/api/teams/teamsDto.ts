export interface IAddTeam {
    "name": string
    "foundationYear": number
    "division": string
    "conference": string
    "avatarUrl": string
};

export interface IGetTeams extends IAddTeam{
    id: number;
};