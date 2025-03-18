import React from "react";
import ReactDOM from "react-dom/client";
import { AllRoutes } from "./routes";
import "./globals.scss";
import "./reset.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AllRoutes />
  </React.StrictMode>
);
