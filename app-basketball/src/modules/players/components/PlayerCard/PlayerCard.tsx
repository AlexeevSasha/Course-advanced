import React, {FC} from "react";
import styled from "styled-components";
import noLogo from  '../../../../assets/images/no-logo-player.svg'


interface IProps {
    logo: string;
    name: string;
    number: number;
    id?:number;
    team: number;
}

export const PlayerCard: FC<IProps> = ({logo, name,number, team}) => {
    return (
        <Flex>
            <Logo>
             <ImgContainer> <Img src={logo || noLogo} alt=""/></ImgContainer>
            </Logo>
            <CartItem>
                <Name>{name}<Number>#{number}</Number></Name>
                <Teams>{team || 'Название команды'}</Teams>
            </CartItem>
        </Flex>
    )
}


const Flex = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
const  ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-width: 280px;
  width: 100%;
 height: 100%;
  overflow: hidden;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);
  border-radius: 4px 4px 0 0;
  max-width: 365px;
  width: 100%;
  height: 280px;
  @media (max-width: 1100px) {
    height: 230px;
  }
  @media ${({theme}) => theme.media._480} {
    height: 150px;
  }
`

const Img = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
`
const CartItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 365px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.darkGrey};
  padding: 24px 0;
  border-radius: 0 0 4px 4px;
`
const Name = styled.h3`
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  @media ${({theme}) => theme.media._480} {
    font-size: 15px;
  }
`
const Number = styled.span`
  color: ${({theme}) => theme.colors.lightRed};
  margin-left: 6px;
`
const Teams = styled.p`
  color: ${({theme}) => theme.colors.lightGrey};
  margin-top: 10px;
  @media ${({theme}) => theme.media._480} {
    font-size: 12px;
  }
`