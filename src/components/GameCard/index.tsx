import React, { FC, useEffect, useRef } from "react";

import { Box } from "@mui/material";

import { Image } from "components";

import * as styles from "./styles";

interface ICard {
  image: string;
  isOpen: boolean;
  onCardClick: () => void;
}

const GameCard: FC<ICard> = ({ image, isOpen, onCardClick }) => {
  const card = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (card?.current?.classList.contains("animate")) {
        card?.current?.classList.remove("animate");
      }
    } else {
      card?.current?.classList.add("animate");
    }
  }, [isOpen]);

  return (
    <Box sx={styles.flipper(isOpen)} ref={card} onClick={onCardClick}>
      <Box sx={styles.getFrontStyles(isOpen)}>
        <Image src={image} />
      </Box>
      <Box sx={styles.back}></Box>
    </Box>
  );
};

export default React.memo(GameCard);
