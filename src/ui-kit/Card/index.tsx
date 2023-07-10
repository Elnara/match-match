import React, { ReactNode } from "react";

import { Box } from "@mui/material";

import { getCardStyle, ICardStyles } from "./style";

interface ICardProps extends ICardStyles {
  children: ReactNode;
}

const Card: React.FC<ICardProps> = ({ children, ...styleProps }) => {
  return <Box sx={getCardStyle(styleProps)}>{children}</Box>;
};

export default React.memo(Card);
