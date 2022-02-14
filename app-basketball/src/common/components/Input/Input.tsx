import React, {FC, InputHTMLAttributes} from "react";
import {EyeIcon, CloseEyeIcon} from "../";
import styled from "styled-components";


interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    type?: string;
    title?: string;
    date?: boolean;
}

export const Input: FC<IInput> = (({title, type = 'text', error, date, ...attr}) => {
    const [typeInput, setTypeInput] = React.useState<string>(type);
    const showHide = () => {
        setTypeInput(typeInput === "password" ? "text" : "password");
    }
    return (
        <div>
            <LabelStyle>{title}</LabelStyle>
            <Container>
                <InputStyle type={typeInput} error={error} {...attr} date={date}/>
                {type === 'password' &&
                    <IconStyle onClick={showHide}>{typeInput === 'password' ? <CloseEyeIcon/> : <EyeIcon/>}</IconStyle>}
            </Container>
            {error ? <ErrorStyle>{error}</ErrorStyle> : ''}
        </div>
    )
})

const IconStyle = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`
const Container = styled.div`
  display: inline;
  position: relative;
`
const LabelStyle = styled.label`
  color: ${({theme}) => theme.colors.grey};
  font-size: 14px;
  display: block;
  margin-bottom: 5px;
`
const InputStyle = styled.input<IInput>`
  background-color: ${({theme}) => theme.colors.lightestGrey1};
  max-width: 366px;
  width: 100%;
  height: 40px;
  border: ${({
               error,
               theme
             }) => error ? `1px solid ${theme.colors.lightestRed}` : `1px solid ${theme.colors.lightestGrey1}`};
  border-radius: 4px;
  color: ${({theme}) => theme.colors.darkGrey};
  font-family: inherit;
  font-weight: 500;
  padding: 0 30px 0 12px;
  font-size: 14px;

  &:hover {
    background-color: ${({theme}) => theme.colors.lightestGrey};
    border: 1px solid ${({theme}) => theme.colors.lightestGrey};
  }

  &:focus {
    background-color: ${({theme}) => theme.colors.lightestGrey1};
    border: 1px solid ${({theme}) => theme.colors.lightestGrey1};
    box-shadow: 0 0 5px #D9D9D9;
  }

  &:disabled {
    pointer-events: none;
    color: ${({theme}) => theme.colors.lightestGrey};
  }
`
const ErrorStyle = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.lightestRed};
  margin-top: 4px;
`