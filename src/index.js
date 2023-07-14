import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import taskStore from "./store/taskStore";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={taskStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
