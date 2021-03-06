import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Navbars from '../Navbar';
import Login from '../Login/Login';
import ListHouse from '../ListHouse/ListHouse';
import ListRoom from '../ListRoom/ListRoom';
import NewHouse from '../ListHouse/NewHouse';
import NewRoom from '../ListRoom/NewRoom';
import ListHouseCategory from '../ListHouseCategory/ListHouseCategory';
import ListRoomCategory from '../ListRoomCategory/ListRoomCategory';
import EditRoom from '../ListRoom/EditRoom';
import EditHouse from '../ListHouse/EditHouse';
import NewHouseCategory from '../ListHouseCategory/NewHouseCategory';
import NewRoomCategory from '../ListRoomCategory/NewRoomCategory';

import useToken from './useToken';

import './App.css';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbars/>
        <Switch>
          <Route path="/dashboard"><Dashboard /></Route>
          <Route path="/house_categories/new"><NewHouseCategory /></Route>
          <Route path="/room_categories/new"><NewRoomCategory /></Route>
          <Route exac path="/houses/new"><NewHouse /></Route>
          <Route path="/houses/:id/edit"><EditHouse /></Route>
          <Route exac path="/rooms/new"><NewRoom /></Route>
          <Route path="/rooms/:id/edit"><EditRoom /></Route>
          <Route exac path="/house_categories"><ListHouseCategory /></Route>
          <Route exac path="/room_categories"><ListRoomCategory /></Route>
          <Route exac path="/houses"><ListHouse /></Route>
          <Route exac path="/rooms"><ListRoom /></Route>
          <Route path="/"><ListHouse /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
