import {FC, ChangeEvent, InputHTMLAttributes} from "react";
import styled from "styled-components";

interface IProps {
   change: (event : ChangeEvent<HTMLInputElement>) => void
}
export const InputFile: FC<IProps> = ({change}) => {

  return (
      <div>
          <InputStyle type="file" name="file" id="file" onChange={change}/>
              <LabelStyle htmlFor="file" >
                  <span>Загрузить фото</span>
              </LabelStyle>
      </div>
  );
};

const InputStyle = styled.input`
    display: none;
`
const LabelStyle = styled.label`
  color: white;
  background: black;
  padding: 5px 0 7px;
  font-size: 16px;
  font-weight: bold;
  width:150px;
  margin:auto;
  display:block;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
`
