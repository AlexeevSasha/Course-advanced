import React, {FC, useEffect, useState} from "react";
import styled from "styled-components";
import {IFormData} from './Aviasales'

interface IProps {
    formData: IFormData,
    modalOpen: (open: boolean) => void;
}

export const Modal: FC<IProps> = ({formData,modalOpen  }) => {
    const { departureDate, returnDate, aviator, where, from, ticket, photo, classAir} = formData;
    const [urlImg, setUrlImg] = useState('')

    useEffect(() => {
        if (!photo) return;
        setUrlImg(URL.createObjectURL(photo));
    },[photo])

    return (
        <Wrapper onClick={() => modalOpen(false)}>
            <Contant>
                <Flex>
                        <span>Откуда</span>
                        <Text>{from}</Text>
                </Flex>
                <Flex>
                    <span>Куда</span>
                    <Text>{where}</Text>
                </Flex>
                <Flex>
                    <span>Дата отправления</span>
                    <Text>{departureDate}</Text>
                </Flex>
                <Flex>
                    <span>Дата возвращения</span>
                    <Text>{returnDate}</Text>
                </Flex>
                <Flex>
                    <span>Количество билетов</span>
                    <Text>{ticket}</Text>
                </Flex>
                <Flex>
                    <span>Класс</span>
                    <Text>{classAir}</Text>
                </Flex>
                <Flex>
                    <span>Трезвый пилот</span>
                    <Text>{aviator === 'on' ? 'Да' : 'Нет'}</Text>
                </Flex>

                {photo ? <Flex>
                    <span>Фото красавчика</span>
                    <ImgStyle src={urlImg} alt=""/>
                </Flex>  :  ""}
            </Contant>
        </Wrapper>
    );
};


const ImgStyle = styled.img`
    width: 150px;
    height: 150px;
    object-fit: contain;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
`

const Contant = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  gap: 30px;
  background: white;
  max-width: 700px;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  box-shadow: -1px 1px 13px 2px rgba(34, 60, 80, 0.2);
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 100px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

const Text = styled.div`
    font-weight: bold;
`