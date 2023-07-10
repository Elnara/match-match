import { SxProps } from "@mui/material";

import { cardSize } from "consts";

export const getWrapperStyles = (cardsCountPerAxis: number): SxProps => ({
  display: "grid",
  justifyContent: "center",
  gridTemplateColumns: `repeat(${cardsCountPerAxis}, ${cardSize}px)`,
  gap: 2,
  gridTemplateRows: `repeat(${cardsCountPerAxis}, 1fr)`,
  img: {
    width: "100%",
  },
});

export const getCardWrapper = (isOpen: boolean): SxProps => ({
  cursor: isOpen ? "cursor" : "pointer",
});
