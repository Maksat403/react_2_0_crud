import React from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
