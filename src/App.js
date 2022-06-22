import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
function App() {
  return ( 
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Nav />
        <div className='main'>
          <Route path='/dialog' component={Dialog} />
          <Route path='/profile' component={Profile} />
        </div>
      </BrowserRouter>
    </div>
   );
}

export default App;
