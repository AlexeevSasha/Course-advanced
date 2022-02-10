import React, {FC} from "react";
import {HeaderCardInfo} from "../../../../common/components/HeaderCardInfo/HeaderCardInfo";
import logo from '../../../../assets/images/teamLogo.png'
import styled from "styled-components";


export const TeamInfo:FC = () => {
    return (
        <div>
        <HeaderCardInfo/>
        <TeamWrapper>
           <ImgLogo><img  src={logo}/></ImgLogo>
            <Content>
                <Name>Denver Nuggets</Name>
                <Flex>
                    <Group>
                            <Title>Year of foundation</Title>
                            <Text>1976</Text>
                            <Title>Conference</Title>
                            <Text>Western</Text>
                    </Group>
                    <Group>
                            <Title>Division</Title>
                            <Text>Northwestern</Text>
                    </Group>
                </Flex>
            </Content>
        </TeamWrapper>
        </div>
    )
}


const TeamWrapper = styled.div`
  display: flex;  width: 100%;
  background: linear-gradient(276.45deg, #393939 0%, #707070 100.28%);
  border-radius: 0 0 10px 10px;
  align-items: center;
  height: 410px;
  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`
const ImgLogo = styled.div`
 max-width: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 210px;
    height: 210px;
    object-fit: cover;
    @media  (max-width: 768px) {
      margin: 48px auto;
      width: 150px;
      height: 150px;
    }
  }
`
const Content = styled.div`
  margin: 40px 0 0;
    display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: white;
  @media (max-width: 700px) {
    align-items: center;
    margin: 0;
  }
  
`
const Name = styled.div`
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;
  margin-bottom: 40px;
  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 25px;
  }
`
const Flex = styled.div`
    display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
const Group = styled.div`
    display: flex;
   flex-direction: column;
   margin-right: 80px;
  @media (max-width: 700px) {
    align-items: center;
    margin: 0;
  }
`
const Title = styled.div`
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
  @media (max-width: 500px) {
    font-size: 17px;
    line-height: 20px;
  }

`
const Text = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 50px;
  margin-top: 8px;
  @media (max-width: 700px) {
    margin-bottom: 32px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
    line-height: 17px;
  }
`