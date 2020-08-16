import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import NavBar from './components/navbar';
import Home from './components/Home';
import Post from './components/Post';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (

      <BrowserRouter>
        <NavBar />

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/post' component={Post} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        


      </BrowserRouter>

  )
}

export default App;
