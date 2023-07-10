import React, { FC, useMemo, useState } from "react";

import { Stack } from "@mui/material";

import { GameCards, GameDoneInfo } from "components";
import { generateImagePairs } from "utils";

interface IPlayingField {
  cardsCount: number;
  isOpenCards: boolean;
  onGameDone: (failPair: number) => void;
}
const PlayingField: FC<IPlayingField> = ({
  cardsCount,
  isOpenCards,
  onGameDone,
}) => {
  const [isDone, setIsDone] = useState<boolean>(false);
  const images = useMemo(() => generateImagePairs(cardsCount), [cardsCount]);

  const handleGameDone = (failPair: number) => {
    setIsDone(true);
    onGameDone(failPair);
  };

  return (
    <Stack gap={3}>
      {isDone && <GameDoneInfo />}
      <GameCards
        cardsCount={cardsCount}
        images={images}
        isOpenCards={isOpenCards}
        onAllCardsOpened={handleGameDone}
      />
    </Stack>
  );
};

export default React.memo(PlayingField);
