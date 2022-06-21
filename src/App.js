import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import './App.css'
function App() {
  return ( 
    <div className='wrapper'>
      <Header />
      <Nav />
      <div className='main'>
        <Profile />
      </div>
    </div>
   );
}

export default App;
