import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

import { routes } from "consts";
import { Colors } from "styles";

import { wrapper } from "./styles";

const GameDoneInfo: FC = () => (
  <Box sx={wrapper}>
    <Typography variant="h6" color={Colors.GREEN} mb={2}>
      Вы нашли все пары!
    </Typography>
    <Button
      size="medium"
      component={Link}
      to={`${routes.RATING.path}`}
      variant="contained"
    >
      Посмотреть результаты
    </Button>
  </Box>
);

export default GameDoneInfo;
