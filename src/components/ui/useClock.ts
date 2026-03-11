import dayjs, { Dayjs } from "dayjs";

export const handleClockChange = (
  view: "minutes" | "seconds",
  date: Dayjs | null,
  onChange?: (value: number) => void
) => {
  if (!date || !onChange) return;

  if (view === "minutes") {
    onChange(date.minute());
  }

  if (view === "seconds") {
    onChange(date.second());
  }
};

export const buildClockValue = (view: "minutes" | "seconds", value: number) => {
  return dayjs()
    .hour(0)
    .minute(view === "minutes" ? value : 0)
    .second(view === "seconds" ? value : 0);
};