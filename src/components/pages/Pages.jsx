import React from "react";
import { Header } from "../common/Header";
import { Home } from "../home/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { About } from "../pages/About";

export const Pages = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </Router>
    </div>
  );
};
