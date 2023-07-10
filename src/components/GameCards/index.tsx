import React, { FC, useEffect, useState } from "react";

import { Box, Grid } from "@mui/material";
import { ICardImage } from "types";

import { GameCard } from "components";

import { getCardWrapper, getWrapperStyles } from "./styles";

interface IGameCards {
  cardsCount: number;
  images: ICardImage[];
  isOpenCards: boolean;
  onAllCardsOpened: (failPair: number) => void;
}

const GameCards: FC<IGameCards> = ({
  cardsCount,
  images,
  isOpenCards,
  onAllCardsOpened,
}) => {
  const [failPair, setFailPair] = useState(0);
  const [activePair, setActivePair] = useState<number[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);

  const checkIsAllCardsOpened = () => {
    if (openCards.length === cardsCount) {
      onAllCardsOpened(failPair);
    }
  };

  const checkNumberOfEntries = (checkedValue: string) =>
    openCards.filter((i) => images[i].path === checkedValue)?.length;

  const handleCardClick = (index: number) => () => {
    if (isOpenCards) return;

    //количество открытых изображений по такому же названию
    const numberOfOpenSameImages = checkNumberOfEntries(images[index].path);

    //если пара уже найдена, закрыть изображение невозможно
    if (numberOfOpenSameImages === 2) return;

    //если кликнули на открытую карту, то закрываем ее
    if (openCards.includes(index)) {
      setOpenCards((prev) => prev.filter((item) => item !== index));
      setActivePair((prev) => prev.filter((item) => item !== index));
      return;
    }

    setOpenCards((prev) => [...prev, index]);

    if (activePair.length) {
      //если у открытой карты другое название, то закрываем обе карты
      if (images[activePair[0]].path !== images[index].path) {
        setFailPair((prevClickCount) => prevClickCount + 1);
        setTimeout(() => {
          setOpenCards((prev) =>
            prev.filter((item) => item !== index && item !== activePair[0])
          );
        }, 1000);
      }
      setActivePair([]);
    } else {
      setActivePair([index]);
    }
  };

  useEffect(() => {
    checkIsAllCardsOpened();
  }, [openCards]);

  return (
    <Grid container sx={getWrapperStyles(Math.sqrt(cardsCount))}>
      {images.map((item, index) => (
        <Box
          key={item.id}
          sx={getCardWrapper(isOpenCards || openCards?.includes(index))}
        >
          <GameCard
            onCardClick={handleCardClick(index)}
            image={item.path}
            isOpen={isOpenCards || openCards?.includes(index)}
          />
        </Box>
      ))}
    </Grid>
  );
};

export default GameCards;
