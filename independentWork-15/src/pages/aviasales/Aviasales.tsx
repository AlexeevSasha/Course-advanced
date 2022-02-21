import React, {FC, useCallback, useState} from "react";
import styled from "styled-components";
import {FirstStep} from "./components/FirstStep";
import {SecondStep} from "./components/SecondStep";
import {ThirdStep} from "./components/ThirdStep";
import {StepIndicator} from "./components/StepsIndicator";
import {Modal} from "./Modal";

//Создать компонент stepsIndicator
//Добавить формы с переходом по шагам

export interface IFormData {
    from: string;
    where: string;
    departureDate: string;
    returnDate: string;
    ticket: string;
    classAir: string;
    aviator: string;
    photo: File | null;
}
const data :IFormData  = {
    from: "",
    where: "",
    departureDate: "",
    returnDate: "",
    ticket: '',
    classAir: 'Супер эконом (стоячий)',
    aviator: 'off',
    photo: null,

};

export const Aviasales: FC = () => {
    const [page, setPage] = useState(1);
    const [check, setCheck] = useState(false)
    const [formData, setFormData] = useState<IFormData>(data);
    const nextPage = useCallback(() => setPage(page + 1 ),[page]);
    const prevPage = useCallback(() => setPage(page - 1 ),[page]);
    return (
        <div>
            <Header>Авиасейлс курильщика</Header>
            <Contant>
                <StepIndicator currentStep={page} changeStep={setPage} />
                {page === 1  &&  <FirstStep formData={formData} setFormData={setFormData} nextPage={nextPage}/>}
                {page === 2 &&  <SecondStep  formData={formData} setFormData={setFormData}  nextPage={nextPage} prevPage={prevPage} />}
                {page === 3 &&  <ThirdStep formData={formData} setFormData={setFormData}  prevPage={prevPage} modalOpen={setCheck}/>}
            </Contant>
            {check ? <Modal formData={formData} modalOpen={setCheck}/> : ''}
        </div>
    );
};


const Contant = styled.div`
   max-width: 500px;
  width: 100%;
  margin: 0 auto;
`

const Header = styled.h1`
  font-size: 50px;
  text-align: center;
  margin-bottom: 50px;
`
