import { TextField, Stack } from "@mui/material";
import { CountdownSlider } from "./CountdownSlider";

type Props = {
  initialTime: number;
  setInitialTime: (time: number) => void;
  setTime: (time: number) => void;
  isRunning: boolean;
};

export const CountdownInputs = ({
  initialTime,
  setInitialTime,
  setTime,
  isRunning,
}: Props) => {

  const MAX_TIME = 720 * 60000;

  const minutes = Math.floor(initialTime / 60000);
  const seconds = Math.floor((initialTime % 60000) / 1000);

  const handleMinutesChange = (value: number) => {
    const newTime = Math.min(
      value * 60000 + (initialTime % 60000),
      MAX_TIME
    );

    setInitialTime(newTime);
    setTime(newTime);
  };

  const handleSecondsChange = (value: number) => {
    const newTime = Math.min(
      Math.floor(initialTime / 60000) * 60000 + value * 1000,
      MAX_TIME
    );

    setInitialTime(newTime);
    setTime(newTime);
  };

  return (
    <Stack spacing={2}>

      <Stack direction="row" spacing={2}>

        <TextField
          label="Minutes"
          type="number"
          value={minutes}
          disabled={isRunning}
          onChange={(e) => handleMinutesChange(Number(e.target.value))}
        />

        <TextField
          label="Seconds"
          type="number"
          value={seconds}
          disabled={isRunning}
          onChange={(e) => handleSecondsChange(Number(e.target.value))}
        />

      </Stack>

      <CountdownSlider
        initialTime={initialTime}
        setInitialTime={setInitialTime}
        setTime={setTime}
        isRunning={isRunning}
      />

    </Stack>
  );
};