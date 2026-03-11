import { Slider } from "@mui/material";

type Props = {
  initialTime: number;
  setInitialTime: (time: number) => void;
  setTime: (time: number) => void;
  isRunning: boolean;
};

export const CountdownSlider = ({
  initialTime,
  setInitialTime,
  setTime,
  isRunning
}: Props) => {

  const handleChange = (_: Event, value: number | number[]) => {
    const newTime = value as number;
    setInitialTime(newTime);
    setTime(newTime);
  };

  return (
    <Slider
      min={0}
      max={60 * 60 * 1000}
      step={15000}
      value={initialTime}
      onChange={handleChange}
      disabled={isRunning}
    />
  );
};