import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import {TeamCard} from "../components/TeamCard/TeamCard";
import {Search, Button, Pagination, Selects} from "../../../common/components";
import {optionsSize} from "../../../common/components/Select/data";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../core/redux/reduxType";
import {getTeamsAction} from "../teamsAction";
import {Empty} from "../../../common/components/Empty/Empty";

export const Teams: FC = () => {
    const dispatch = useAppDispatch();
    const {teams} = useAppSelector(state => state.teams)
    useEffect(() => {
        dispatch(getTeamsAction())
    }, [])
    return (
            <Flex>
                <div>
                    <WrapperSearchaAndBtn>
                        <Search/>
                        <LinkStyles to='addTeam'><Button btnAdd>Add +</Button></LinkStyles>
                    </WrapperSearchaAndBtn>
                    {teams?.data.length === 0 || !teams && <Empty isflag/>}
                    <GridContainer>
                        {teams?.data.map(({avatarUrl, name, id, foundationYear}) => <TeamCard
                            key={id}
                            foundationYear={foundationYear}
                            avatarUrl={avatarUrl}
                            name={name}/>)}
                    </GridContainer>
                </div>
                <WrapperPaginAndSelect>
                    <Pagination pageCount={5} initialPage={1 - 1}/>
                    <Selects options={optionsSize} defaultValue={optionsSize[0]} menuPlacement='top'/>
                </WrapperPaginAndSelect>
            </Flex>
    );
}

const LinkStyles = styled(Link)`
    max-width: 104px;
    width: 100%;
  @media ${({theme}) => theme.media._768} {
    max-width: none;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: calc(100vh - 112px);
  @media ${({theme}) => theme.media._768} {
    height: calc(100vh - 78px);
  }
`

const WrapperPaginAndSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  & > :first-child {
    margin-right: 24px;
  }

  & > :last-child  {
   width: 90px;
    .css-1umo15m-control, .css-16ihzgb-control {
      background: white;
    }
  }
  @media ${({theme}) => theme.media._768} {
    margin-bottom: 16px;
  }
`
const WrapperSearchaAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  & > :first-child {
    margin-right: 24px;
  }
  @media ${({theme}) => theme.media._768} {
    flex-direction: column;
    margin-bottom: 16px;
    & > :first-child {
      margin: 0 0 16px;
    }
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: stretch;
  grid-gap: 24px;
  margin-bottom: 24px;
  @media ${({theme}) => theme.media._980} {
    grid-template-columns: repeat(2, 1fr);
  }
`