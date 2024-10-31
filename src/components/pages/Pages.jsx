import React from "react";
import { Header } from "../common/Header";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export const Pages = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/about"></Route>
          <Route path="/users"></Route>
        </Switch>
      </Router>
    </div>
  );
};
