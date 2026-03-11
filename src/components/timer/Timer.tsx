import { useMemo } from 'react';
import { Wrapper, Title, TimeDisplay } from './Timer.styled';
import { TimerControls } from './TimerControls';
import { Clock } from '../ui/Clock';
import { useTimer } from '../../hooks/useTimer';
import { Stack } from '@mui/material';
import { Clocks } from './Timer.styled';

const Timer = () => {
    const { time, isRunning, setTime, handleStartPause, handleReset } = useTimer();

    const minutes = useMemo(() => Math.floor(time / 60000), [time]);
    const seconds = useMemo(() => Math.floor((time % 60000) / 1000), [time]);
    const milliseconds = useMemo(() => Math.floor((time % 1000) / 10), [time]);

    return (
        <Wrapper>
            <Title>Timer</Title>
            <Stack>
                <Clocks>
                    <Clock 
                    view='minutes' 
                    value={minutes}
                    onChange={m => {
                    const newTime = m * 60000 + (time % 60000);
                    setTime(newTime);
                }} />

                    <Clock 
                    view='seconds'
                    value={seconds} 
                    onChange={s => {
                    const newTime = Math.floor(time / 60000) * 60000 + s * 1000;
                    setTime(newTime);
                }}
                />
                </Clocks>
            </Stack>
            <TimeDisplay>
                {minutes}:{seconds}:{milliseconds}
            </TimeDisplay>

            <TimerControls isRunning={isRunning} onStartPause={handleStartPause} onReset={handleReset} />
        </Wrapper>
    );
};

export default Timer;
