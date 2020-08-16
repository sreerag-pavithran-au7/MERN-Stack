import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import NavBar from './components/navbar';
import Home from './components/Home';
import Post from './components/Post';

function App() {
  return (

      <BrowserRouter>
        <NavBar />

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/post' component={Post} />
        


      </BrowserRouter>

  )
}

export default App;
