import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Main path="/product"/>
          <Detail path='/product/:id'/>
          <Update path='/product/:id/edit'/>
        </Router>
        
      </div>
    </div>
  );
}

export default App;
