import { useState, useRef, useCallback, useEffect } from "react";

export const useCountdown = () => {
  const [initialTime, setInitialTime] = useState(60000);
  const [time, setTime] = useState(60000);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const alarmRef = useRef<HTMLAudioElement | null>(null);

  useEffect(()=> {
    const audio = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg")

    audio.preload = "auto"
    audio.load();
    alarmRef.current = audio;
  }, []);

  const handleStartPause = useCallback(() => {
    if (isRunning) {
      clearInterval(intervalRef.current!);
      setIsRunning(false);
    } else {
      setIsRunning(true);

      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 10) {
            clearInterval(intervalRef.current!);
            setIsRunning(false);
            
            alarmRef.current!.volume = 1;
            alarmRef.current!.currentTime = 0
            alarmRef.current?.play()
            return 0;
          }
          return prev - 10;
        });
      }, 10);
    }
  }, [isRunning, alarmRef]);

  const handleReset = useCallback(() => {
    clearInterval(intervalRef.current!);
    setIsRunning(false);
    setTime(initialTime);
  }, [initialTime]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    initialTime,
    setInitialTime,
    time,
    setTime,
    isRunning,
    handleStartPause,
    handleReset,
  };
};