import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import styled from "styled-components";
import {Header, NavMenu} from "../components";


export const OutletWrapper: FC = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false)
    const showToggle = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <>
            <ContainerHeader><Header toggle={toggleMenu} clickToggle={showToggle}/></ContainerHeader>
            <ContainerMenu toggle={toggleMenu}><NavMenu/></ContainerMenu>
            <RightDiv toggle={toggleMenu} onClick={showToggle}></RightDiv>
            <Wrapper>
                <Content>
                    <Outlet/>
                </Content>
            </Wrapper>
        </>
    )
}

const RightDiv = styled.div<{ toggle?: boolean }>`
  z-index: 8;
  position: fixed;
  background: black;
  height: 100vh;
  width: 100%;
  transition: all .3s linear;
  opacity: 0;
  display: none;
  ${({toggle}) => toggle && `
    display: block;
    opacity: .5;
`}
`

const Content = styled.div`
  margin: 32px 80px 0;
  height: 100vh;
  @media ${({theme}) => theme.media._768} {
    margin: 16px 12px 0;
  }
`
const Wrapper = styled.div`
  margin-left: 140px;
  padding-top: 80px;
  height: 100vh;

  @media ${({theme}) => theme.media._768} {
    padding-top: 62px;
    margin: 0;
  }
`

const ContainerHeader = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
`
const ContainerMenu = styled.div<{ toggle?: boolean }>`
  position: fixed;
  z-index: 9;
  margin-top: 80px;
  height: calc(100% - 80px);
  @media ${({theme}) => theme.media._768} {
    width: 50%;
    margin-top: 62px;
    height: calc(100% - 62px);
    transition: all .3s linear;
    transform: translateX(-100%);
    ${({toggle}) => toggle && `
    transition: all .3s linear;
    transform: translateX(0);
`}
`