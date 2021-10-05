import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import { App } from "App";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "modules";
import { history } from "lib/history";
import { ConnectedRouter } from "connected-react-router";

ReactDOM.render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById("root")
);
