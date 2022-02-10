import React, { FC } from "react";
import logo from '../../../assets/images/header-logo.png';
import profileIcon from '../../../assets/icons/profile.svg';
import menuIcon from '../../../assets/icons/menu.svg';
import styled from "styled-components";



interface Props  {
    name?: string;
};

export const Header: FC<Props> = ({name }) => {
    return (
            <HeaderWrapper >
                <HeaderMenu src={menuIcon} alt=""/>
                <HeaderLogo >
                   <LogoImg src={logo} alt="logo" />
                </HeaderLogo>
                <HeaderProfile >
                    <HeaderName >{name || 'Name'}</HeaderName>
                    <HeaderAvatar src={profileIcon} alt="" />
                </HeaderProfile>
            </HeaderWrapper>
    )
}


const HeaderWrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
background-color: white;
padding: 0 50px;box-shadow: 0px 1px 10px rgba(209, 209, 209, 0.5);
width: 100%;
height: 80px;
@media (max-width: 600px) {
    justify-content: center;
    height: 62px;
}
`

const HeaderProfile = styled.div`
display: flex;
align-items: center;
@media (max-width: 600px) {
    display: none;
}
`
const HeaderName = styled.span`
color: ${({ theme }) => theme.colors.darkGrey};
margin-right: 16px;
`

const HeaderAvatar = styled.img`
width: 40px;
`
const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const LogoImg = styled.img`
  width: 100%;
  @media (max-width: 600px){
    width: 150px;
  }
`

const HeaderMenu = styled.img`
display: none;
@media (max-width: 600px) {
    display: block;
    position: absolute;
    left: 12px;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
}
`


