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
                        <Wrapper>
                            <Title>Position</Title>
                            <Text>Forward</Text>
                        </Wrapper>
                        <Wrapper>
                            <Title>Team</Title>
                            <Text>Denver Nuggets</Text>
                        </Wrapper>
                    </Group>
                    <Group>
                        <Wrapper>
                            <Title>Height</Title>
                            <Text>206 cm</Text>
                            </Wrapper>
                         <Wrapper>
                             <Title>Weight</Title>
                              <Text>95 kg</Text>
                         </Wrapper>
                    </Group>
                    <Group>

                        <Wrapper> <Title>Age</Title>
                            <Text>27</Text>
                        </Wrapper>

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
  max-width: 500px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  @media  (max-width: 1000px) {
    max-width: 350px;
  }
  img {
    width: 500px;
    height: 400px;
    object-fit: cover;
    @media  (max-width: 1000px) {
      width: 300px;
      height: 250px;
    }
    @media  (max-width: 700px) {
      margin: 48px auto;
      width: 250px;
      height: 150px;
    }
  }
`
const Content = styled.div`
  margin: 40px 20px 0 0;
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
  @media  (max-width: 1000px) {
    font-size: 30px;
    line-height: 35px;
  }
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
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-items: center;
  }
`
const Wrapper = styled.div`
  margin-right: 80px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
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
    margin: 0;
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