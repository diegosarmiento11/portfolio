import React from "react";
import ReactDOM from "react-dom";
import "./plugins/i18next";
import "./index.css";
import MainPage from "./pages/home/MainPage.tsx";

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById("root")
);
