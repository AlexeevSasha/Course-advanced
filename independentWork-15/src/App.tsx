import React, { FC } from "react";
import "./styles.css";
import { Aviasales } from "./pages/aviasales/Aviasales";
import styled from "styled-components";

export const App: FC = () => {
  return (
    <FlexCenter >
        <Aviasales/>
    </FlexCenter>
  );
};

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`