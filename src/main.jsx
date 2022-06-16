import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Context from "./context";
import GlobalStyle from "./style/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <GlobalStyle />
      <App />
    </Context>
  </React.StrictMode>
);
