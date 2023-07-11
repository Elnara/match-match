import React from "react";
import { routes } from "consts";
import Layout from "layouts";
import { Game, Rating } from "pages";
import { useRoutes } from "react-router-dom";

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
