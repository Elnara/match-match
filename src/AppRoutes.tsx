import React from "react";
import { Outlet, useRoutes } from "react-router-dom";

import Layout from "layouts";
import { Game, Rating } from "pages";

import { routes } from "./consts";

const AppRoutes = () =>
  useRoutes([
    {
      path: routes.ROOT.path,
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Game />,
        },
        {
          path: routes.RATING.path,
          element: <Rating />,
        },
      ],
    },
  ]);

export default AppRoutes;
