import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/style.css";
import "./style/App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./comp/redux/reducer";

const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
