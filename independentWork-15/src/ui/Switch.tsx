import React, {FC, ChangeEvent, useCallback} from "react";
import styled from "styled-components";

interface Iprops {
    value: boolean;
    onChange: any;
}

export const Switch: FC<Iprops> = ({ value, onChange }) => {
    const changeValue = useCallback(
        (event : ChangeEvent<HTMLInputElement>) => {
            onChange(!value, event);
        },
        [value, onChange]
    );
    return (
        <LabelStyle  htmlFor="chek">
            <input type="checkbox" checked={value} onChange={changeValue}  id="chek"/>
            <MarkChek checked={value} >
                <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                    <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
                </svg>
            </MarkChek>
        </LabelStyle>
    );
};

const LabelStyle = styled.label`
    display: flex;
    position: relative;
    width: 55px;
    height: 30px;
  & > input {
    display: none;
  }
`
const MarkChek = styled.div<{checked: boolean}>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color:  ${({checked}) => checked ? 'black' : 'white'};
  border: 1px solid black;
  transition: all .4s ease-in-out;
  border-radius: 35px;
  &:after {
    position: absolute;
    content: "";
    
    height: 24px;
    width: 24px;
    left: ${({checked}) => checked ? '26px' : '4px'};
    bottom: 2px;
    background-color: ${({checked}) => checked ? 'white' : 'black'};
    transition: all .4s ease-in-out;
    border-radius: 50%;
  }
  
  & > svg {
    opacity: ${({checked}) => checked ? '1' : '0'};
    position: absolute;
    right: ${({checked}) => checked ? '4px' : '26px'};
    top: 4px;
    width: 20px;
    z-index: 1;
    transition: all .4s ease-in-out;
  }
`





