import React, { Component } from 'react';
import './App.css';

import FrontPage from './Pages/FrontPage.js';
import BottomBar from './Pages/BottomBar.js';
import WaysToGive from './Pages/WaysToGive.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FrontPage/>
        <WaysToGive/>
        <BottomBar/>  
      </div>
    );
  }
}

export default App;
