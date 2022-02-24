import React, {FC, useEffect} from "react";
import {FormPlayer} from "../components/FormPlayer/FormPlayer";
import {useAppDispatch} from "../../../core/redux/reduxType";
import {teamOptionAction} from "../../teams/teamsAction";

export const AddPlayer : FC = () => {
    const dispath = useAppDispatch()
    useEffect(() => {
        dispath(teamOptionAction())
    }, [dispath])
    return (
        <FormPlayer/>
    )
}