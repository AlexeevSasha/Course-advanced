import React, {FC} from "react";
import styled from "styled-components";
import editIcon from '../../../assets/icons/create.svg'
import deleteIcon from '../../../assets/icons/delete.svg';





export const HeaderCardInfo:FC = () => {
    return (
            <HeaderCard>
                <BreadCrumbsWrapper>Bread <SpanStyle>/</SpanStyle> Crumbs</BreadCrumbsWrapper>
                <WrapperButton>
                    <Button>
                      <Img src={editIcon} />
                        <Img src={deleteIcon} />
                    </Button>
                </WrapperButton>
            </HeaderCard>
    )
}

const HeaderCard = styled.div`
    width: 100%;
    background: white;
    border-radius: 10px 10px 0 0;
    border: 0.5px solid ${({theme}) => theme.colors.lightGrey};
    height: 70px;
    display: flex;
    align-items: center;
  justify-content: space-between;
`

const BreadCrumbsWrapper = styled.div`
   color: ${({theme}) => theme.colors.red};
  font-weight: 500;
  margin-left: 32px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    margin-left: 16px;
    font-size: 13px;
  }
  }
`
const SpanStyle = styled.span`
  color: ${({theme}) => theme.colors.lightGrey}
`

const WrapperButton = styled.div`
    display: flex;
    align-items: center;
   margin-right: 32px;
  @media (max-width: 768px) {
    margin-right: 16px;
  }
`
const Button = styled.button`
    background: transparent;
    border: none;
`
const Img = styled.img`
    width: 24px;
    margin-left: 24px; 
   cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 16px;
    width: 20px;
  }
`


