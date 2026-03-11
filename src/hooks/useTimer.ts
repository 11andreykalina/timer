import { useState, useRef, useCallback, useEffect } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleStartPause = useCallback(() => {
    if (isRunning) {
      clearInterval(intervalRef.current!);
      setIsRunning(false);
    } else {
      setIsRunning(true);

      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
  }, [isRunning]);

  const handleReset = useCallback(() => {
    clearInterval(intervalRef.current!);
    setIsRunning(false);
    setTime(0);
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    time,
    setTime,
    isRunning,
    handleStartPause,
    handleReset,
  };
};