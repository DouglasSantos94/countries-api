import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Base } from "./styles/elements";
import Reset from "./styles/generics/Reset";

ReactDOM.render(
  <React.StrictMode>
    <Base />
    <Reset />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
