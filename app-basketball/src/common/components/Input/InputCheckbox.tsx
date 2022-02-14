import React, {FC, InputHTMLAttributes} from "react";
import ChekMark from "../../../assets/icons/arrow-chek.svg";
import styled from "styled-components";

interface IInputCheckbox extends InputHTMLAttributes<HTMLInputElement>{
    error?:  boolean
}
export const InputCheckbox :FC<IInputCheckbox> = (({error,...attr})  => {
    return (
        <div>
            <FlexCheckbox >
                <InputCheckboxStyle id="check" type='checkbox' bg={ChekMark} error={error}  {...attr}/>
                <LabelCheckbox htmlFor='check' >I accept the agreement</LabelCheckbox>
            </FlexCheckbox>

            {error ? <ErrorStyle >You must be accept the agreement.</ErrorStyle> : ''}
        </div>
    )
})

const FlexCheckbox = styled.div`
   display: flex;
  align-items: center;

`
const InputCheckboxStyle = styled.input<{bg: string, error?:  boolean}>`
  appearance: none;
  max-width: 12px;
  width: 100%;
  height: 12px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  cursor: pointer;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    margin-left: 1px;
    display: none;
    content: ' ';
    background-image: url(${({ bg }) => bg });
    background-size: 7px 6px;
    width: 7px;
    height: 6px;
  }
  ${({error, theme}) => error && `
    border: 1px solid ${theme.colors.lightestRed};
    & + label {
      color:  ${theme.colors.lightestRed};
    }
  `}
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.red};
  }
  &:checked {
    border: 1px solid ${({ theme }) => theme.colors.red};
    background:  ${({ theme }) => theme.colors.red};
    margin: 0;
    &:after {
      display: block;
    }
  }
  &:disabled {
    border: 1px solid ${({ theme }) => theme.colors.lightestGrey};
    background:  ${({ theme }) => theme.colors.lightestGrey};
    cursor: default;
    &:after {
      display: block;
    }
    & + label {
      color:  ${({ theme }) => theme.colors.lightestGrey};
    }
  }
`
const LabelCheckbox = styled.label`
color: ${({ theme }) => theme.colors.grey};
font-size: 14px;margin-left: 8px;
  cursor: pointer;
`
const ErrorStyle = styled.p`
font-size: 12px;
font-weight: 500;
color: ${({ theme }) => theme.colors.lightestRed};
margin-top: 4px;
`