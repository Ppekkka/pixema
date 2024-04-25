import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux/es/exports";
import { store } from "src/store";
import { BrowserRouter } from "react-router-dom";
import "src/styles/index.css";
import FontStyles from "src/styles/fontStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <FontStyles></FontStyles>
      <App />
    </BrowserRouter>
  </Provider>
);
