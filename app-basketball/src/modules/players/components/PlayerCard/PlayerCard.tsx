import React, {FC} from "react";
import styled from "styled-components";
import player from '../../../../assets/images/player.png'



export const PlayerCard: FC = () => {
    return (
        <Flex >
            <Logo >
              <Img src={player}  alt="" />
            </Logo>
            <CartItem >
                <Name>Jaylen Adams<Number >#10</Number></Name>
                <Teams >Portland trail blazers</Teams>
            </CartItem>
        </Flex>
    )
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);
  border-radius: 4px 4px 0 0;
  max-width: 520px;
  width: 100%;
  height: 280px;

`
const Img = styled.img`
  width:70%;
  object-fit: cover
`

const CartItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 520px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.darkGrey};
  padding: 24px 0;
  border-radius: 0 0 4px 4px;
`
const Name = styled.h3`
  color: white;
  font-weight: 500;
  font-size: 18px;
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    font-size: 12px;
  }
`