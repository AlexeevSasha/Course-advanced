import React, {SyntheticEvent, FC, useState, ChangeEvent, useEffect} from "react";
import styled from "styled-components";
import {Input} from "../../../ui/Input";
import {IFormData} from "../Aviasales";

//Реализовать форму второго шага
//Сделать контейнер для кнопочек
interface IProps {
    formData: IFormData,
    setFormData: (step: IFormData) => void;
    nextPage: () => void;
    prevPage: () => void;
}

export const SecondStep: FC<IProps> = ({formData, setFormData, nextPage, prevPage}) => {
    const  {departureDate, returnDate } = formData;
    const [errorDate, setErrorDate] = useState<string | null>('');

    const submitFormData = (event : SyntheticEvent) => {
        event.preventDefault();
        if (!errorDate ) nextPage();
    };
    const departureHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const departureDate = event.target.value;
        setFormData({...formData, departureDate})
    }
    const returnHandler = (event : ChangeEvent<HTMLInputElement>) => {
        const returnDate = event.target.value;
        setFormData({...formData, returnDate})
    }
    useEffect(() => {
        if (Date.parse(departureDate) >= Date.parse(returnDate)) {
            setErrorDate('Дата возвращения должна быть больше даты отправления');
        }  else {
            setErrorDate(null)
        }
    }, [departureDate, returnDate ])

    return (
      <form onSubmit={submitFormData}>
        <Container>
          <Input inputType='date' name='departure' id='departure' label='Дата отправления' required
                 min={ new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]}
                 value={departureDate}
                 onChange={departureHandler}
                 />
          <Input inputType='date' name='return' id='return' label='Дата возвращения'
                 required
                 value={returnDate}
                 error={errorDate}
                 min={ new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0]}
                 onChange={returnHandler}
          />
          <ButtonFlex>
            <ButtonStyle onClick={prevPage} type='button'>Назад</ButtonStyle>
          <ButtonStyle  type='submit'>Дальше</ButtonStyle>
          </ButtonFlex>
        </Container>
      </form>
  )
};

const ButtonFlex = styled.div`
  display: flex;
  gap: 20px;
`

const Container = styled.fieldset`
  border: none;
  display: grid;
  gap: 15px;
`
const ButtonStyle = styled.button`
  cursor: pointer;
    width: 100%;
  height: 30px;
`