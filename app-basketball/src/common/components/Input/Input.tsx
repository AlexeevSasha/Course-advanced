import React, {FC, InputHTMLAttributes} from "react";
import styled from "styled-components";

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
    error?:  string;
}
export const Input :FC<IInput> = (({error, ...attr}) => {
    return (
        <InputWrapper >
            <LabelStyle>Label</LabelStyle>
            <InputStyle error={error} {...attr}/>
            {error ? <ErrorStyle >{error}</ErrorStyle> : ''}
        </InputWrapper>
    )
})
const InputWrapper = styled.div`
margin-bottom: 24px;
`
const LabelStyle = styled.label`
color: ${({ theme }) => theme.colors.grey};
font-size: 14px;
display: block;
margin-bottom: 5px;
`
const InputStyle = styled.input<{error?: string}>`
background-color: ${({ theme }) => theme.colors.lightestGrey1};
max-width: 366px;
width: 100%;
height: 40px;
border: ${({ error, theme }) => error ? `1px solid ${theme.colors.lightestRed}` : `1px solid ${theme.colors.lightestGrey1}`};
border-radius: 4px;
color: ${({ theme }) => theme.colors.darkGrey};
font-family: inherit;
font-weight: 500;
padding: 0 30px 0 12px;
font-size: 14px; 

&:hover {
    background-color:  ${({ theme }) => theme.colors.lightestGrey};
    border: 1px solid ${({ theme }) => theme.colors.lightestGrey};
}

&:focus {
    background-color: ${({ theme }) => theme.colors.lightestGrey1};
    border: 1px solid ${({ theme }) => theme.colors.lightestGrey1};
    box-shadow: 0 0 5px #D9D9D9;
}
&:disabled {
  pointer-events: none;
  color: ${({ theme }) => theme.colors.lightestGrey};
}
`
const ErrorStyle = styled.p`
font-size: 12px;
font-weight: 500;
color: ${({ theme }) => theme.colors.lightestRed};
margin-top: 4px;
`