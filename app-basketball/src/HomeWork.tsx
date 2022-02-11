import React, {FC } from 'react';
import {Input} from "./common/components/Input/Input";
import {InputCheckbox} from "./common/components/Input/InputCheckbox";
import {Button} from "./common/components/Button/Button";
import {ButtonCancel} from "./common/components/Button/ButtonCancel";
import {TeamInfo} from "./modules/teams/components/TeamInfo/TeamInfo";
import styled from "styled-components";
import {PlayerInfo} from "./modules/players/components/PlayerInfo/PlayerInfo";
import {Search} from "./common/components/Input/Search";
import {Header} from "./common/components/Header/Header";
import {NavMenu} from "./common/components/NavMenu/NavMenu";
import {PlayerCard} from './modules/players/components/PlayerCard/PlayerCard'
import {TeamCard} from "./modules/teams/components/TeamCard/TeamCard";

export const HomeWork : FC = () => {
  return (
      <div style={{margin: '30px'}}>
          <Input />
          <InputCheckbox />
          <div style={{display: 'grid', gap: '24px'}}>
          <Search/>
          <Button >Регистрация</Button>
              <Button btnAdd>Add +</Button>
              <ButtonCancel />
          </div>
              <Wrapper >
                  <Header/>
                  <NavMenu/>
              <TeamInfo/>
                  <PlayerInfo/>
                  <PlayerCard/>
                  <TeamCard/>
              </Wrapper>
      </div>
  );
}

const Wrapper = styled.div`
    display: grid;
    gap: 24px;
   margin-top: 24px;
  max-width: 1200px;
  width: 100%;
`









