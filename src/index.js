import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Shipping from "./Pages/Shipping/Shipping";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/maps" component={Shipping} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
