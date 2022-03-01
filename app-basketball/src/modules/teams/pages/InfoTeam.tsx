import React, {FC,useState} from 'react';
import {TeamInfo} from "../components/TeamInfo/TeamInfo";
import {HeaderCardInfo, PopapDelete} from "../../../common/components";
import {deleteTeamThunk} from "../teamsAction";
import {useAppDispatch} from "../../../core/redux/reduxType";
import {useNavigate, useParams} from "react-router-dom";

export const InfoTeam: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { id } = useParams();
    const [visible, setVisible] = useState<boolean>(false)
    const onHandlerClickYes = () => {
        setVisible(false);
        dispatch(deleteTeamThunk(Number(id)))
    }
    const onEditTeam = () => navigate('edit')
    const onDeleteTeam = () => setVisible(true)
    const closeModal = () => setVisible(false)
    return (
        <div style={{position: 'relative'}}>
            <PopapDelete visible={visible} onClose={closeModal} onHandlerClickYes={onHandlerClickYes}/>
            <HeaderCardInfo onDelete={onDeleteTeam} onEdit={onEditTeam}/>
        <TeamInfo/>
        </div>
    );
}