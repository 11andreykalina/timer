import { useRef } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StyledClock } from "./Clock.styled";
import { handleClockChange, buildClockValue } from "./useClock";

type Props = {
  view: "minutes" | "seconds";
  value: number;
  readOnly?: boolean;
  onChange?: (value: number) => void;
};

export const Clock = ({ view, value, readOnly, onChange }: Props) => {

  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {

    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * -6;

    ref.current.style.transform =
      `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(600px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
      >

        <StyledClock
          views={[view]}
          value={buildClockValue(view, value)}
          onChange={(date) => handleClockChange(view, date, onChange)}
          readOnly={readOnly}
        />

      </div>

    </LocalizationProvider>
  );
};