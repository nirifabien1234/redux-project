import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./main.css";
import store from "./store";

// creation of container
const container = document.getElementById("root");

// App render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
