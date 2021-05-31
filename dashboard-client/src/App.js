import React from 'react';
import './App.css';
import { Button } from "@chakra-ui/react"
import { Switch, Route } from 'react-router-dom'
import {LandingPage, MenuPage, DashboardPage} from './pages'

function App() {
  return (
    <Switch>
      <Route path= "/" exact={true} component={LandingPage} />
      <Route path= "/menu" exact={true} component={MenuPage} />
      <Route path= "/dashboard" exact={true} component={DashboardPage} />
    </Switch>
  );
}

export default App;
