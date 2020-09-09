import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/home';
import Login from './Login/login';
import Register from './Register/register';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/" render={(props) => (
            <Login {...props} history={history} />
          )} />
          <Route exact path="/register" render={(props) => (
            <Register {...props} history={history} />
          )} />

          <Route exact path="/home" render={(props) => (
            <Home {...props} history={history} />
          )} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
