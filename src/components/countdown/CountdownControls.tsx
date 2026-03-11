import { Buttons, StyledButton } from "../timer/Timer.styled";

type Props = {
  isRunning: boolean;
  onStartPause: () => void;
  onReset: () => void;
};

export const CountdownControls = ({ isRunning, onStartPause, onReset }: Props) => {
  return (
    <Buttons>

      <StyledButton
        variant="contained"
        onClick={onStartPause}
      >
        {isRunning ? "Pause" : "Start"}
      </StyledButton>

      <StyledButton
        variant="contained"
        onClick={onReset}
      >
        Reset
      </StyledButton>

    </Buttons>
  );
};