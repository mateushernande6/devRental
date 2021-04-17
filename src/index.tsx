import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Global from "./styles/style";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Global />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
