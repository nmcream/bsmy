import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BsmyRoute from "./pages/BsmyRoute";
import NomalRoute from "./pages/NomalRoute";
import MbbsRoute from "./pages/MbbsRoute";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/nomal-route" element={<NomalRoute />} />
      <Route path="/bsmy-route" element={<BsmyRoute />} />
      <Route path="/mbbs-route" element={<MbbsRoute />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
