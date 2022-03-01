import React, {FC} from "react";
import styled from "styled-components";
import {Button, ButtonCancel} from '../';


interface ModalProps {
    visible?: boolean;
    onClose: () => void;
    onHandlerClickYes?: () => void;
    player?: boolean
}
export const PopapDelete :FC <ModalProps> = ({visible = false, onClose,onHandlerClickYes, player}) => {
    if (!visible) return null;
    return (
        <PositionAbsolut onClick={onClose} >
            <Wrapper onClick={e => e.stopPropagation()}>
                <PopapTitle>{player ? 'Are you sure you want to delete this player?' : 'You definitely want to delete the command?'}</PopapTitle>
                <ButtonFlexWrapper>
                    <MarginDiv>
                        <ButtonCancel onClick={onClose}>No</ButtonCancel>
                    </MarginDiv>
                    <Button onClick={onHandlerClickYes}>Yes</Button>
                </ButtonFlexWrapper>
            </Wrapper>
        </PositionAbsolut>
    )
}

const MarginDiv = styled.div`
margin-right: 24px;
  width: 100%;
`

const ButtonFlexWrapper = styled.div`
display: flex`

const PopapTitle = styled.h1`
    text-align: center;
  margin-bottom: 40px;
  color: ${({theme}) => theme.colors.darkGrey};
    
`

const PositionAbsolut = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  animation-name: appear;
  animation-duration: 300ms;
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes slide-in {
    from {
      transform: translateY(-150px);
    }
    to {
      transform: translateY(0);
    }
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  background: white;
  position: relative;
  padding: 40px;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: slide-in;
  animation-duration: 0.5s;
  border-radius: 4px;
`




