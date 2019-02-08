import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//import logo from './logo.svg';
//import './App.css';
//import './assets/less/style.less';

import Home from "./components/pages/home.jsx";
import DicionarioAcordes from "./components/pages/dicionario-acordes.jsx";

const Page = () => <h2>Página interna</h2>
const NoMatch = () => <h2>page not fount</h2>

const AppRouter = () => {
  return (
    <Router>
      <React.Fragment>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dicionario-acordes">Dicionário de Acordes</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dicionario-acordes" component={DicionarioAcordes} />
        <Route path="/page" component={Page} />
        <Route component={NoMatch} />
      </Switch>
      </React.Fragment>
    </Router>
  );
};

export default AppRouter;
