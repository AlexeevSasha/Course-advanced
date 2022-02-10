import React, {FC, InputHTMLAttributes} from "react";
import {HeaderCardInfo} from "../../../../common/components/HeaderCardInfo/HeaderCardInfo";
import player from '../../../../assets/images/player.png'
import styled from "styled-components";


export const PlayerInfo:FC = () => {
    return (
        <div>
        <HeaderCardInfo/>
        <PlayerWrapper>
           <ImgLogo><img  src={player} alt='logo'/></ImgLogo>
            <Content>
                <Name>Greg Whittington <Number>#22</Number></Name>
                <Flex>
                    <Group>
                        <div>
                            <Title>Position</Title>
                            <Text>Forward</Text>
                        </div>
                        <div>
                            <Title>Team</Title>
                            <Text>Denver Nuggets</Text>
                        </div>
                    </Group>
                    <Group>
                        <div>
                            <Title>Height</Title>
                            <Text>206 cm</Text>
                            </div>
                         <div>
                             <Title>Weight</Title>
                              <Text>95 kg</Text>
                         </div>
                    </Group>
                    <Group>

                        <div> <Title>Age</Title>
                            <Text>27</Text>
                        </div>

                    </Group>
                </Flex>
            </Content>
        </PlayerWrapper>
        </div>
    )
}

const PlayerWrapper = styled.div`
  display: flex;  
  width: 100%;
  background: linear-gradient(276.45deg, #393939 0%, #707070 100.28%);
  border-radius: 0 0 10px 10px;
  align-items: center;
  height: 525px;
  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`
const ImgLogo = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-top: 100px;
  img {
    height: 100%;
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
const Number = styled.span`
  color: ${({theme}) => theme.colors.lightRed};
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
`
const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
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