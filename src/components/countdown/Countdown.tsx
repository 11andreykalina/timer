import { Wrapper, Title } from './Countdown.styled';
import { CountdownInputs } from './CountdownInputs';
import { CountdownControls } from './CountdownControls';
import { useCountdown } from '../../hooks/useCountdown';
import { CountdownResult } from './CountdownResult';
import { Clock } from '../ui/Clock';
import { Stack } from '@mui/material';


const Countdown = () => {
    const { initialTime, setInitialTime, setTime, time, isRunning, handleStartPause, handleReset } = useCountdown();
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return (
        <Wrapper>
            <Title>Countdown</Title>

            <CountdownInputs
                initialTime={initialTime}
                setInitialTime={setInitialTime}
                setTime={setTime}
                isRunning={isRunning}
            />
            <Stack direction={{ xs: "column", md: "row" }}
             spacing={{ xs: 2, md: 4 }}
             alignItems="center"
             sx={{
             mt: 2
             }} >
            <Clock
                view='minutes'
                value={minutes}
                onChange={m => {
                    const newTime = m * 60000 + (time % 60000);
                    setTime(newTime);
                    setInitialTime(newTime);
                }}
            />

            <Clock
                view='seconds'
                value={seconds}
                onChange={s => {
                    const newTime = Math.floor(time / 60000) * 60000 + s * 1000;

                    setTime(newTime);
                    setInitialTime(newTime);
                }}
            />
            </Stack>
            <CountdownResult time={time} initialTime={initialTime} />
            <CountdownControls isRunning={isRunning} onStartPause={handleStartPause} onReset={handleReset} />
        </Wrapper>
    );
};

export default Countdown;
