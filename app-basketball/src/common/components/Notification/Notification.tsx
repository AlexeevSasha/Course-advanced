import React, {FC, useEffect, useMemo, useState} from "react";
import styled from "styled-components";

interface IProps {
    error: string | undefined;
}

export const Notification: FC<IProps> =({error}) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
            if (error) setVisible(true);
            const timeout = setTimeout(() => setVisible(false), 3000);
            return () => clearTimeout(timeout);
    }, [error])

    if (!visible || !error)  return null;
    return (
        <Wrapper onClick={() => setVisible(false)}>{error}</Wrapper>
    )
}




const Wrapper = styled.div`
  position: absolute;
  background: ${({theme}) => theme.colors.lightRed};
  border-radius: 4px;
  color: white;
  box-shadow: 0px 0px 8px -2px rgba(34, 60, 80, 0.19);
  padding: 8px 16px;
  z-index: 100;
  font-size: 16px;
  right: 50px;
  top: 50px;
`