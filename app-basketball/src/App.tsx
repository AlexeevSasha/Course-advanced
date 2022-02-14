import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {OutletWrapper} from "./common/hooks/OutletWrapper";
import {Teams} from "./modules/teams/pages/Teams";
import {Players} from "./modules/players/pages/Players";
import {Error404} from "./common/components/Error404/Error404";
import {HomeWork} from "./HomeWork";
import {AddTeam} from "./modules/teams/pages/AddTeam";
import {AddPlayer} from "./modules/players/pages/AddPlayer";
import {SingIn} from "./modules/authorization/pages/SingIn";
import {SingUp} from "./modules/authorization/pages/SingUp";
import {InfoPlayer} from './modules/players/pages/InfoPlayer';
import {InfoTeam} from './modules/teams/pages/InfoTeam'


export const App = () => {
    return (
        <Routes>
            <Route path="login" element={<SingIn/>}/>
            <Route path="registration" element={<SingUp/>}/>
            <Route path="/" element={<Navigate to="/homework"/>}/>
            <Route path='homework' element={<HomeWork/>}/>
            <Route path='/' element={<OutletWrapper/>}>
                <Route path='teams' element={<Teams/>}/>
                <Route path='teams/:id' element={<InfoTeam/>}/>
                <Route path='teams/addTeam' element={<AddTeam/>} />
                <Route path='players' element={<Players/>}/>
                <Route path='players/:id' element={<InfoPlayer/>}/>
                <Route path='players/addPlayer' element={<AddPlayer/>} />
            </Route>
            <Route path='*' element={<Error404/>}/>
        </Routes>
    )
}

