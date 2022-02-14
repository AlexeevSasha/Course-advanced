import React, {FC} from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";


export const HomeWork: FC = () => {
    return (
        <Wrapper>
            <Title>HomeWork 14</Title>
            <div style={{fontSize: '30px'}}>pages</div>
            <Pages>
                <Card to='/login' target="_blank">
                   <LinkWrapper >Sing On</LinkWrapper>
                </Card>
                <Card to='/registration' target="_blank">
                    <LinkWrapper >Sing Up</LinkWrapper>
                </Card>
                <Card  to='*' target="_blank">
                    <LinkWrapper>404</LinkWrapper>
                </Card>
                <Card to='/teams' target="_blank">
                    <LinkWrapper >Teams</LinkWrapper>
                </Card>
                <Card to='/teams/1' target="_blank">
                    <LinkWrapper >Info Team</LinkWrapper>
                </Card>
                <Card to='/teams/addTeam' target="_blank">
                    <LinkWrapper >Add Team</LinkWrapper>
                </Card>
                <Card  to='/players' target="_blank">
                    <LinkWrapper>Players</LinkWrapper>
                </Card>
                <Card to='/players/1' target="_blank">
                    <LinkWrapper >Info Player</LinkWrapper>
                </Card>
                <Card to='/players/addPlayer' target="_blank">
                    <LinkWrapper >Add Player</LinkWrapper>
                </Card>

            </Pages>

        </Wrapper>
    );
}

const LinkWrapper = styled.h1`
  color: grey;
  font-size: 24px;
`

const Card = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
    width: 200px;
    height: 100px;
    border-radius: 6px;
    border: 1px solid grey;
   
  :hover {
    box-shadow: 0 1px 10px rgba(209,209,209,0.5);
    border: none;
  }
`

const Pages = styled.div`
 margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 24px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  background-color: white;
`

const Title = styled.h1`
  color: ${({theme}) => theme.colors.darkGrey};
  font-size: 30px;
  padding-top: 25px;
`











