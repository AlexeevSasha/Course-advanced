import React, {FC, InputHTMLAttributes, useState} from "react";
import {InputFileIcon} from "../SVGConstans/SVG";
import styled from "styled-components";


export const InputFile: FC = ({...attr}: InputHTMLAttributes<HTMLInputElement>) => {
    const [image, setImage] = useState<string>('')
    const showHideImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        const ar: FileList | null = e.target.files
        if (!ar) return;
        setImage(URL.createObjectURL(ar[0]));
    }
    return (
        <LabelStyle>
            <IconStyle><InputFileIcon/></IconStyle>
            {image ? <ImgStyle src={image}/> : ''}
            <InputStyle type="file" onChange={showHideImg}  {...attr}  />
        </LabelStyle>
    )
}
const LabelStyle = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 340px;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: ${({theme}) => theme.colors.lightestGrey};
  border-radius: 5px;
  opacity: .7;
  cursor: pointer;
  text-align: center;
  @media ${({theme}) => theme.media._980} {
    max-width: 200px;
    height: 150px;
  }
`

const IconStyle = styled.div`
  z-index: 1;
  opacity: .7;
`

const ImgStyle = styled.img`
  position: absolute;
  z-index: 0;
  max-width: 250px;
  height: 100%;
  height: 230px;
  object-fit: contain;
  opacity: .7;
  @media ${({theme}) => theme.media._980} {
    max-width: 160px;
    max-height: 150px;

  }
`
const InputStyle = styled.input`
  display: none;
  outline: 0;
  opacity: 0;
  pointer-events: none;
  user-select: none
`