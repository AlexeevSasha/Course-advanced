import React, {SyntheticEvent, FC, useState, ChangeEvent, useCallback} from "react";
import {Input} from "../../../ui/Input";
import styled from "styled-components";
import {IFormData} from "../Aviasales";


//Реализовать форму первого шага
interface IProps {
    formData: IFormData,
    setFormData: (step: IFormData) => void;
    nextPage: () => void;
}

export const FirstStep: FC<IProps> = ({formData, setFormData, nextPage }) => {
    const [errorFrom, setErrorFrom] = useState<string | null>('');
    const [errorWhere, setErrorWhere] = useState<string | null>('');
    const submitFormData = (event : SyntheticEvent) => {
        event.preventDefault();
        if (!errorFrom && !errorWhere) nextPage();
    };
    const ValidateInput = useCallback(
        (str : string) => {
            if (str === ''){
                return 'required';
            } else if ( str[0] + str.slice(1) !== str[0].toUpperCase() + str.slice(1)) {
                return'Первая буква должна быть заглавная';
            } else if (!isNaN(+str[0])) {
                return'Первая буква не должна быть цыфрой';
            } else {
                return null
            }
        }, []
    )

    const fromHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const from = event.target.value;
        setFormData({...formData, from})
        const validate = ValidateInput(from)
        validate ? setErrorFrom(validate) :  setErrorFrom(null);
    }
    const whereHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const where = event.target.value;
        setFormData({...formData, where})
        const validate = ValidateInput(where)
        validate ? setErrorWhere(validate) :  setErrorWhere(null);
    }

    return (
        <form onSubmit={submitFormData} >
            <Container>
                <Input inputType='text' name='from' id='from' label='Откуда'
                       required  value={formData.from} error={errorFrom}
                       onChange={fromHandler}
                />
                <Input inputType='text' name='where' id='where' label='Куда'
                       required error={errorWhere} value={formData.where}
                       onChange={whereHandler}

                />
                <ButtonStyle type='submit' >Дальше</ButtonStyle>
            </Container>
        </form>
    );
};

const Container = styled.div`
  border: none;
  display: grid;
  gap: 15px;
  
`

const ButtonStyle = styled.button`
  cursor: pointer;
  width: 100%;
  height: 30px;
`