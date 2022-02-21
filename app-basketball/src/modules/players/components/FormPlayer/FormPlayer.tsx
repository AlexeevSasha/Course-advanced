import React, {FC} from "react";
import styled from "styled-components";
import {InputFile, Input, ButtonCancel, Button, Selects} from "../../../../common/components";
import {optionsPosition} from "../../../../common/components/Select/data";


export const FormPlayer: FC = () => {
    return (
        <Wrapper>
            <BreadCrumbs>BreadCrumbs</BreadCrumbs>
            <Form>
                <InputFileContainer>
                    <InputFile/>
                </InputFileContainer>
                <FormRight>
                    <Input id='namePlayer' title="Name"/>
                        <Selects label='Position' id='PositionSelect' options={optionsPosition}/>
                        <Selects label='Teams' id='TeamsSelect' options={[]}/>
                    <Grid>
                    <Input id='Height' title="Height (cm)" type='number'/>
                    <Input id='Weight' title="Weight (kg)" type='number'/>
                    <Input id='Birthday' title="Birthday"  />
                    <Input id='Number' title="Number" type='number'/>
                    </Grid>
                    <BtnWrapper>
                        <ButtonCancel type='button'/>
                        <Button type='submit'>Save</Button>
                    </BtnWrapper>
                </FormRight>
            </Form>
        </Wrapper>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 24px;
`

const SelectTitle = styled.label`
color: ${({ theme }) => theme.colors.grey};
font-size: 14px;
display: block;
margin-bottom: 5px;
`
const InputFileContainer = styled.div`
  max-width: 500px;
  width: 100%;
  @media ${({theme}) => theme.media._980} {
    display: flex;
    justify-content: center;
  };
`

const Wrapper = styled.div`
  background: white;
  border-radius: 10px;
  padding-bottom: 48px;
`
const BreadCrumbs = styled.h4`
  color: ${({theme}) => theme.colors.red};
  font-weight: 500;
  padding: 24px 0 0 32px;
  cursor: pointer;
  @media ${({theme}) => theme.media._768} {
    padding: 16px 0 0 16px;
  };
`

const Form = styled.form`
  position: relative;
  display: flex;
  margin: 72px 72px 0 72px;

  & > :first-child {
    margin-right: 48px;
  }

  @media ${({theme}) => theme.media._980} {
    margin: 24px 24px 0 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > :first-child {
      margin: 0 0 24px;
    }
  };
`
const FormRight = styled.div`
  display: grid;
  gap: 24px;
  max-width: 366px;
  width: 100%;
`
const BtnWrapper = styled.div`
  display: flex;

  & > :last-child {
    margin-left: 24px;
  }
`