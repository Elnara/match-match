import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./AppRoutes";
import { basename } from "consts";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
