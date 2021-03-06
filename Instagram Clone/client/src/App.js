import React from 'react';
import NavBar from './components/navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';
import CreatePost from './components/screens/CreatePost';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/create">
        <CreatePost />
      </Route>
    </BrowserRouter>
  );
}



export default App;
