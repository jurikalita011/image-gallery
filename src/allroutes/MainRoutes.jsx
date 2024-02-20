import React from "react";
import { Route, Routes } from "react-router-dom";

import { Gallery } from "../pages/Gallery";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
    </Routes>
  );
};
