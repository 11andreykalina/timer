import { Buttons, StyledButton } from './Timer.styled';

type Props = {
    isRunning: boolean;
    onStartPause: () => void;
    onReset: () => void;
};

export const TimerControls = ({ isRunning, onStartPause, onReset }: Props) => {
    return (
        <Buttons>
            <StyledButton variant='contained' onClick={onStartPause}>
                {isRunning ? 'Pause' : 'Start'}
            </StyledButton>

            <StyledButton variant='contained' onClick={onReset}>
                Reset
            </StyledButton>
        </Buttons>
    );
};
