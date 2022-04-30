import { createStore } from "redux";
import allReducers from "./redux/reducers/index";

/* =============================================
Created store for all app states and takes an
overall reducer functions and a second argument
to help in  Redux DevTools extension
============================================== */

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
