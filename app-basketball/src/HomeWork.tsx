import React, {FC } from 'react';
import {Input} from "./common/components/Input/Input";
import {InputCheckbox} from "./common/components/Input/InputCheckbox";
import {Button} from "./common/components/Button/Button";
import {ButtonCancel} from "./common/components/Button/ButtonCancel";
import {TeamInfo} from "./modules/teams/components/TeamInfo/TeamInfo";
import styled from "styled-components";
import {PlayerInfo} from "./modules/players/components/PlayerInfo/PlayerInfo";

export const HomeWork : FC = () => {
  return (
      <div style={{margin: '30px'}}>
          <Input />
          <InputCheckbox />
          <div style={{display: 'grid', gap: '24px'}}>
          <Button >Регистрация</Button>
              <Button btnAdd>Add +</Button>
              <ButtonCancel />
          </div>
              <Wrapper >
              <TeamInfo/>
                  <PlayerInfo/>
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









