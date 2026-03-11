import { useMemo } from 'react';
import { LinearProgress, Stack } from '@mui/material';
import { TimeDisplay } from '../timer/Timer.styled';

type Props = {
    time: number;
    initialTime: number;
};

export const CountdownResult = ({ time, initialTime }: Props) => {
    const minutes = useMemo(() => Math.floor(time / 60000), [time]);

    const seconds = useMemo(() => Math.floor((time % 60000) / 1000), [time]);

    const progress = useMemo(
        () => (initialTime === 0 ? 0 : ((initialTime - time) / initialTime) * 100),
        [time, initialTime]
    );

    return (
        <Stack spacing={2} alignItems='center'>
            <TimeDisplay>
                {minutes}:{seconds}
            </TimeDisplay>

            <LinearProgress 
            variant='determinate' 
            value={progress} 
            sx={{
            width: "100%",
            maxWidth: 400 
            }} 
            />
        </Stack>
    );
};
