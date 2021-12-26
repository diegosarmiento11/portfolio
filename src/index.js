import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainPage from "./pages/home/MainPage.tsx";
// import Home from './views/home/Home';

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById("root")
);
