import React, { FC, useEffect, useState } from "react";

import { Typography } from "@mui/material";

interface ITimer {
  timerSize: number;
  onTimerCompleted: () => void;
}

const Timer: FC<ITimer> = ({ timerSize, onTimerCompleted }) => {
  let interval: ReturnType<typeof setInterval> | undefined;
  const [currentSecond, setCurrentSecond] = useState(timerSize);

  useEffect(() => {
    interval = setInterval(() => {
      setCurrentSecond((prevValue) => prevValue - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (currentSecond === 0) {
      if (interval) clearInterval(interval);
      onTimerCompleted();
    }
  }, [currentSecond]);

  return <Typography variant="body1">{currentSecond}</Typography>;
};

export default Timer;
