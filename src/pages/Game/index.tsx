import React, { FC, useMemo, useState } from "react";

import { Stack, Typography } from "@mui/material";

import { PlayingField, StartGame, Timer } from "components";
import { timeToRemember } from "consts/timer";
import { Card } from "ui-kit";
import { getDatesDiff } from "utils";

import { back, wrapper } from "./styles";

const Game: FC = () => {
  const [gameStartTime, setGameStartTime] = useState<Date>();
  const [cardsCountPerAxis, setCardsCountPerAxis] = useState<number>(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isOpenCards, setIsOpenCards] = useState(false);

  const isTimerShowing = useMemo(
    () => isGameStarted && isOpenCards,
    [isGameStarted, isOpenCards]
  );

  const handleGameStart = (columnsAndRowsCount: number) => {
    if (columnsAndRowsCount) {
      setCardsCountPerAxis(columnsAndRowsCount);
      setIsGameStarted(true);
      setIsOpenCards(true);
      setGameStartTime(new Date());
    }
  };

  const handleBackClick = () => {
    setCardsCountPerAxis(0);
    setIsGameStarted(false);
  };

  const handleGameDone = (failPair: number) => {
    if (!gameStartTime) return;

    localStorage.setItem(
      "match-match-results",
      JSON.stringify({
        failPair,
        time: getDatesDiff(gameStartTime, new Date()),
      })
    );
  };

  const handleTimerCompleted = () => {
    setIsOpenCards(false);
  };

  return (
    <>
      {isGameStarted && (
        <>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1" sx={back} onClick={handleBackClick}>
              Назад
            </Typography>
            {isTimerShowing && (
              <Timer
                onTimerCompleted={handleTimerCompleted}
                timerSize={timeToRemember}
              />
            )}
          </Stack>

          <PlayingField
            isOpenCards={isOpenCards}
            cardsCount={cardsCountPerAxis ** 2}
            onGameDone={handleGameDone}
          />
        </>
      )}
      {!isGameStarted && (
        <Stack sx={wrapper}>
          <Card width="300px">
            <StartGame onGameStart={handleGameStart} />
          </Card>
        </Stack>
      )}
    </>
  );
};

export default Game;
