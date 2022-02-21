import React, {FC, InputHTMLAttributes, useState} from "react";
import styled from "styled-components";


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  inputType?: "text" | "password" | "number" | 'date';
  name: string;
  id: string;
  label: string;
  error?: string | null;
}
export const Input: FC<InputProps> = ({
  inputType = 'text',
  name,
  id,
  label,
   error,
  ...attr
}) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <InputStyle error={error} type={inputType} name={name} id={id} {...attr} />
       <Error>{error}</Error>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

const InputStyle = styled.input<{error?: string | null}>`
  border: ${({error}) => error ? '1px solid red' : '1px solid black'};
  height: 30px;
  &:focus {
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  }
`
const Error = styled.div`
  display: block;
  font-size: 14px;
  color: red;
  text-align: right;
`
