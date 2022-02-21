import React, {FC} from "react";
import styled, {css} from "styled-components";

//Сделать три кнопки, с индикацией выбранного шага в данный момент,
//Добавить колбэки для перехода по шагам по клику

interface IProps {
    currentStep: number;
    changeStep: (step : number) => void;
}

export const StepIndicator: FC<IProps> = ({currentStep, changeStep}) => {
    return (
        <FlexContainer>
            <ButtonStyle selected={currentStep === 1} onClick={() => changeStep(1)}>Куда</ButtonStyle>
            <ButtonStyle selected={currentStep === 2} onClick={() => changeStep(2)}>Когда</ButtonStyle>
            <ButtonStyle selected={currentStep === 3} onClick={() =>   changeStep(3)}>Как</ButtonStyle>
        </FlexContainer>
    );
};

const FlexContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-bottom: 40px;
`

const ButtonStyle = styled.button<{selected: boolean}>`
  cursor: pointer;
    width: 120px;
    height: 60px;
    background: ${({selected}) => selected ? 'black' : 'white'};
   color: ${({selected}) => selected ? 'white' : 'black'};
   border: 1px solid black;
   border-radius: 50%;
   font-size: 18px;
  &:hover {
    background:  ${({selected}) => selected ? '' : '#FFFAFA'};
    cursor:  ${({selected}) => selected ? 'default' : 'pointer'};
  }
`
