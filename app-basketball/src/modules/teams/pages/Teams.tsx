import React, {FC} from 'react';
import styled from "styled-components";
import {TeamCard} from "../components/TeamCard/TeamCard";
import {Search, Button, Pagination, Selects} from "../../../common/components";
import {optionsSize} from "../../../common/components/Select/data";
export const Teams: FC = () => {
    return (
            <Flex>
                <div>
                    <WrapperSearchaAndBtn>
                        <Search/>
                        <Button btnAdd>Add +</Button>
                    </WrapperSearchaAndBtn>
                    <GridContainer>
                        <TeamCard/>
                        <TeamCard/>
                        <TeamCard/>
                        <TeamCard/>
                        <TeamCard/>
                        <TeamCard/>
                    </GridContainer>
                </div>
                <WrapperPaginAndSelect>
                    <Pagination pageCount={5} initialPage={1 - 1}/>
                    <Selects options={optionsSize} defaultValue={optionsSize[0]} menuPlacement='top'/>
                </WrapperPaginAndSelect>
            </Flex>
    );
}
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