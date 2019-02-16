import React, { Component } from 'react';
import './App.css';

import FrontPage from './Pages/FrontPage.js';
import BottomBar from './Pages/BottomBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FrontPage/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
