import styled from 'styled-components';
import { Button } from '@mui/material';
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
`;

export const Title = styled.h1`
font-size: 32px;
`;

export const TimeDisplay = styled.div`
font-size: 24px;
font-weight: bold;
`;

export const Buttons = styled.div`
display: flex;
gap: 10px;
`;

export const StyledButton = styled(Button)`
font-size: 16px;        
`;


export const TC = styled(TimeClock)`
background-color: grey;
`;
