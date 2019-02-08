import React from 'react';
import {  Route, Switch } from "react-router-dom";

//import logo from './logo.svg';
//import './App.css';
//import './assets/less/style.less';

import Home from "./components/pages/home.jsx";

const Page = () => <h2>Página interna</h2>
const NoMatch = () => <h2>page not fount</h2>

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/page" component={Page} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default AppRouter;
