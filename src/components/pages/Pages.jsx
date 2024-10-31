import React from "react";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export const Pages = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
};
