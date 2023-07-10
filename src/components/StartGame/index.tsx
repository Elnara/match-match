import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { Button, Stack, Typography } from "@mui/material";

import { FormSelect } from "components";
import { cardsVariants } from "consts";

import { IForm } from "./types";

interface IStartGame {
  onGameStart: (countPerAxis: number) => void;
}

const StartGame: FC<IStartGame> = ({ onGameStart }) => {
  const { control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      cardsVariant: 4,
    },
  });

  const handleGameStart = (formData: IForm) => {
    onGameStart(formData.cardsVariant);
  };

  return (
    <Stack gap={3}>
      <Typography variant="h5">Игра match-match</Typography>
      <form id="game-form" onSubmit={handleSubmit(handleGameStart)}>
        <Stack gap={2}>
          <FormSelect
            name="cardsVariant"
            control={control}
            options={cardsVariants}
            variant="outlined"
            isCleanable={false}
          />
          <Button variant="contained" type="submit" form="game-form">
            Начать игру
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default StartGame;
