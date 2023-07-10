import React, { FC } from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import { wrapper } from "./styles";

const Layout: FC = () => (
  <Box sx={wrapper}>
    <Outlet />
  </Box>
);

export default Layout;
