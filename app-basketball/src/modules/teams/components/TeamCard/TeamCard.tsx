import React, {FC} from "react";
import styled from "styled-components";
import team from '../../../../assets/images/teamLogo.png'



export const TeamCard: FC = () => {
    return (
        <Flex >
            <Logo >
                <ImgWrapper><Img src={team}   /></ImgWrapper>
            </Logo>
            <CartItem >
                <Name>Portland trail blazers</Name>
                <Yarn >Year of foundation: 1970</Yarn>
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
  align-items: center;
  background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);
  border-radius: 4px 4px 0 0;
  max-width: 520px;
  width: 100%;
  height: 280px;
  @media (max-width: 1000px) {
    height: 220px;
  }
  @media (max-width: 768px) {
    height: 140px;
  }
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
  @media(max-width: 768px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 360px) {
    width: 70px;
    height: 70px;
  }
`

const Img = styled.img`
  width: 100%;
  object-fit: cover
`

const CartItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.darkGrey};
  max-width: 520px;
  width: 100%;
  padding: 24px 0;
  border-radius: 0 0 4px 4px;
`
const Name = styled.h3`
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`
const Yarn = styled.p`
  color: ${({theme}) => theme.colors.lightGrey};
  margin-top: 10px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`


