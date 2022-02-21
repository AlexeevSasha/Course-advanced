import React, {FC, useState, SyntheticEvent, ChangeEvent} from "react";
import {Input} from "../../../ui/Input";
import styled from "styled-components";
import {Switch} from "../../../ui/Switch";
import {IFormData} from "../Aviasales";
import {InputFile} from "../../../ui/InputFile";

//Реализовать форму третьего шага
interface IProps {
  formData: IFormData,
  setFormData: (step: IFormData) => void;
  prevPage: () => void;
  modalOpen: (open: boolean) => void;
}
export const ThirdStep: FC<IProps> = ({formData, setFormData, prevPage, modalOpen}) => {
  const { departureDate, returnDate, where, from, ticket} = formData;
  const [visible, setvVisible] = useState(false)
  const [toggle, setToggle] = useState(false)
  const submitFormData = (event : SyntheticEvent) => {
    event.preventDefault();
  if (departureDate && returnDate && where && from ) {
    modalOpen(true)
  } else {
    alert('Заполнине все пункты')
  }

  };
  const ticketHandler = (event : ChangeEvent<HTMLInputElement>) => {
    const ticket = event.target.value;
    setFormData({...formData, ticket})
  }
  const selectHandler = (event : ChangeEvent<HTMLSelectElement>) => {
    const classAir = event.target.value;
    setFormData({...formData, classAir})
    if (classAir.includes('Бизнес')) {
      setvVisible(true)
    } else {
      setvVisible(false)
    }
  }
  const FileChange = (event : ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) return;
    if (event.target.files.length > 0) {
      formData.photo = event.target.files[0]
    }
  }
  React.useEffect(() => {
    formData.aviator = toggle ? 'on' : 'off'
  }, [toggle])
  return (
      <form onSubmit={submitFormData}>
        <Container>
          <legend>Параметры</legend>
          <Input inputType='number' name='ticket' id='ticket' label='Количество билетов' required  min={1}
                 onChange={ticketHandler}
          />
          <FlexContainer>
            <label htmlFor='class' >Класс</label>
            <SelectStyle name="class" id="class"
                         onChange={selectHandler}>
              <option value="Супер эконом (стоячий)">Супер эконом (стоячий)</option>
              <option value="Эконом (табурет)">Эконом (табурет)</option>
              <option value="Бизнес (кресло dxRacer)">Бизнес (кресло dxRacer)</option>
            </SelectStyle>
          </FlexContainer>
          <FlexContainer>
            <label >Трезвый пилот</label>
          <Switch value={toggle} onChange={setToggle} />
          </FlexContainer>
        </Container>
        {
            visible && <Container>
            <div>В бизнес классе летаю только красивые люди.</div>

           <div >
              <InputCheckStyle type="checkbox" id='checks'/>
              <label htmlFor="checks">Я красавчик!</label>
             <FlexContainer>
               <label htmlFor='file'>Докажите</label>
                <InputFile change={FileChange}/>
             </FlexContainer>
           </div>
            </Container>
        }
          <ButtonFlex>
            <ButtonStyle onClick={prevPage} type='button'>Назад</ButtonStyle>
            <ButtonSend type='submit'>ЗАКАЗАТЬ</ButtonSend>
          </ButtonFlex>

      </form>
  )
};


const InputCheckStyle = styled.input`
  & ~ div {
    margin: 16px 0;
    display: none;
  }
  &:checked ~ div {
    display: flex;
  }
  
`


const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ButtonFlex = styled.div`
  display: flex;
  gap: 20px;
`

const Container = styled.fieldset`
  display: grid;
  gap: 15px;
  margin-bottom: 20px;
`
const ButtonStyle = styled.button`
  cursor: pointer;
    width: 100%;
  height: 50px;
`

const SelectStyle = styled.select`
  height: 25px;
  padding: 0 10px 0 5px;
  
`

const ButtonSend = styled.button`
  cursor: pointer;
  width: 100%;
  height: 50px;
  font-weight: bold;
  color: white;
  font-size: 20px;
  background-color: #fe6f61;
  border: none;
  border-radius: 10px;
  &:hover {
    background-color: #fe5c4d;
  }
`