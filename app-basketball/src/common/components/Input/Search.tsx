import React, {FC, InputHTMLAttributes} from "react";
import search from '../../../assets/icons/search.svg'
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    onChange?: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<Props>=( {onChange, ...attr}) => {
    return (
        <SearchWrapper>
            <InputStyle
                type="search"
                placeholder="Search..."
                onChange={onChange}
                {...attr}
            />
            <IconStyle src={search} alt="" />
        </SearchWrapper>
    );
};



const SearchWrapper = styled.div`
position: relative;
display: inline;
max-width: 365px;
width: 100%;
height: 40px;
`
const InputStyle = styled.input`
max-width: 365px;
width: 100%;
height: 40px;
background: white;
border: 1px solid ${({ theme }) => theme.colors.lightestGrey};
border-radius: 4px;
padding: 0 30px 0 12px;
`

const IconStyle = styled.img`
position: absolute;
right: 10px;
top: 50%;
cursor: pointer;
transform: translateY(-50%);
`
