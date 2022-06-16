import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App";
import Context from "./context";
import GlobalStyle from "./style/global";
import "react-toastify/dist/ReactToastify.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <GlobalStyle />
      <App />
      <ToastContainer theme="colored" autoClose={800} />
    </Context>
  </React.StrictMode>
);
