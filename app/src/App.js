import React from "react";
import MainPage from './MainPage';
import HomePage from './HomePage';

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

export default function App() {
  return (    
      <Router>         
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/app" component={MainPage} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
      </Router>
  );
}