import styled from "styled-components";
import { Button } from "@mui/material";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  padding: 50px;
  border-radius: 20px;

  background: radial-gradient(
    circle at top,
    #1e293b,
    #020617
  );

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #38bdf8;
`;

export const Clocks = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const TimeDisplay = styled.div`
  font-size: 52px;
  font-weight: 700;
  color: #38bdf8;
  letter-spacing: 2px;
`;


export const Buttons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
    }
  }
`;

export const StyledButton = styled(Button)`
  padding: 10px 24px !important;
  border-radius: 12px !important;
  font-weight: 600 !important;
`;