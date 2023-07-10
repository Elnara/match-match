import React, { FC } from "react";

import { Stack, Typography } from "@mui/material";
import { IRating } from "types";

import { Card } from "ui-kit";

const Rating: FC = () => {
  const resultsJSON = localStorage.getItem("match-match-results");

  if (!resultsJSON) {
    return (
      <Typography variant="h6" textAlign="center">
        Результаты не найдены
      </Typography>
    );
  }

  const {
    failPair,
    time: { hours, minutes, seconds },
  }: IRating = resultsJSON ? JSON.parse(resultsJSON) : {};

  return (
    <Stack justifyContent="center" alignItems="center">
      <Card width="500px">
        {resultsJSON && (
          <Stack gap={2}>
            <Typography variant="h6">Результаты:</Typography>
            <Stack direction="row" gap={1}>
              <Typography variant="body1">Количество неудач:</Typography>
              <Typography>{failPair}</Typography>
            </Stack>
            <Stack direction="row" gap={1}>
              <Typography variant="body1">Время прохождения игры:</Typography>
              <Typography>
                {hours ? `${hours} часов ` : ""}
                {minutes ? `${minutes} минут ` : ""}
                {`${seconds} секунд`}
              </Typography>
            </Stack>
          </Stack>
        )}
      </Card>
    </Stack>
  );
};

export default Rating;
