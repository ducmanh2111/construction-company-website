import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Navbars from '../Navbar';
import Login from '../Login/Login';
import ListHouse from '../ListHouse/ListHouse';
import ListRoom from '../ListRoom/ListRoom';
import NewHouse from '../ListHouse/NewHouse';
import NewRoom from '../ListRoom/newRoom';
import useToken from './useToken';

import './App.css';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <Navbars/>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard"><Dashboard /></Route>
          <Route path="/houses/new"><NewHouse /></Route>
          <Route path="/rooms/new"><NewRoom /></Route>
          <Route path="/houses"><ListHouse /></Route>
          <Route path="/rooms"><ListRoom /></Route>
          <Route path="/"><ListHouse /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
