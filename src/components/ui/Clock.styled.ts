import styled from "styled-components";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";

export const StyledClock = styled(TimeClock)`
  position: relative;
  overflow: hidden;
  touch-action: none;

  background:
    radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 60%),
    radial-gradient(circle at 70% 70%, rgba(0,0,0,0.4), transparent 70%),
    rgba(255,255,255,0.05);

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  border-radius: 24px;
  padding: 18px;

  border: 1px solid rgba(255,255,255,0.15);

  box-shadow:
    inset 0 6px 12px rgba(255,255,255,0.15),
    inset 0 -10px 18px rgba(0,0,0,0.35),
    0 25px 50px rgba(0,0,0,0.45);

  transition: transform 0.25s ease;
  

  .MuiClockNumber-root {
    color: white;
    font-weight: 700;
    text-shadow: 0 2px 6px rgba(0,0,0,0.6);
  }

  .MuiClockPointer-root {
    background: linear-gradient(180deg,#38bdf8,#0284c7);
    box-shadow: 0 0 8px rgba(56,189,248,0.9);
  }

  .MuiClock-pin {
    background: #38bdf8;
    box-shadow: 0 0 8px rgba(56,189,248,0.9);
  }

  &::before {
    content: "";
    position: absolute;
    inset: -50%;

    background: linear-gradient(
      120deg,
      transparent,
      rgba(255,255,255,0.35),
      transparent
    );

    transform: rotate(25deg);
    animation: glassMove 6s linear infinite;
  }

  @keyframes glassMove {
    0% {
      transform: translateX(-100%) rotate(25deg);
    }
    100% {
      transform: translateX(100%) rotate(25deg);
    }
  }

  /* ===== Mobile styles ===== */

  @media (max-width: 768px) {
    padding: 14px;
    border-radius: 20px;

    box-shadow:
      inset 0 4px 8px rgba(255,255,255,0.12),
      inset 0 -6px 12px rgba(0,0,0,0.35),
      0 15px 30px rgba(0,0,0,0.4);

    .MuiClockNumber-root {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;
    border-radius: 16px;

    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    .MuiClockNumber-root {
      font-size: 0.75rem;
      font-weight: 600;
    }

    .MuiClockPointer-root {
      box-shadow: 0 0 6px rgba(56,189,248,0.8);
    }

    .MuiClock-pin {
      box-shadow: 0 0 6px rgba(56,189,248,0.8);
    }
  }
`;