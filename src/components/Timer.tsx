//import PropTypes from "prop-types";
import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { Wrapper, Title, TimeDisplay, Buttons, StyledButton } from './Timer.styled';
import { Stack } from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const minutes = useMemo(() => Math.floor(time / 60000), [time]);
    const seconds = useMemo(() => Math.floor((time % 60000) / 1000), [time]);
    const milliseconds = useMemo(() => Math.floor((time % 1000) / 10), [time]);

    const handleStartPause = useCallback(() => {
        if (isRunning) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
        } else {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime(prev => prev + 10);
            }, 10);
        }
    }, [isRunning]);

    const handleReset = useCallback(() => {
        clearInterval(intervalRef.current!);
        setIsRunning(false);
        setTime(0);
    }, []);

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <Wrapper>
            <Title>Timer</Title>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack direction='row' spacing={4}>
                    <TimeClock views={['minutes']} value={dayjs().hour(0).minute(minutes).second(0)} readOnly />

                    <TimeClock views={['seconds']} value={dayjs().hour(0).minute(0).second(seconds)} readOnly />

                    <TimeClock
                        views={['seconds']}
                        value={dayjs()
                            .hour(0)
                            .minute(0)
                            .second(milliseconds % 60)}
                        readOnly
                    />
                </Stack>
            </LocalizationProvider>
            <TimeDisplay>
                {minutes}:{seconds}:{milliseconds}
            </TimeDisplay>

            <Buttons>
                <StyledButton variant='contained' onClick={handleStartPause}>
                    {isRunning ? 'Pause' : 'Start'}
                </StyledButton>
                <StyledButton variant='contained' onClick={handleReset}>
                    Reset
                </StyledButton>
            </Buttons>
        </Wrapper>
    );
};
//Timer.propTypes = {};
export default React.memo(Timer);
