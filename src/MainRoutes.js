import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserDetails from "./components/UserDetails";
import UserPage from "./components/UserPage";
import NotFound from "./components/NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/users/:id" element={<UserDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
