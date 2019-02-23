import React, { Component } from 'react';
import './App.css';

import FrontPage from './Pages/FrontPage.js';
import DesktopHDCopy from './Pages/DesktopHDCopy.js';
import WaysToGive from './Pages/WaysToGive.js';
import BottomBar from './Pages/BottomBar.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FrontPage/>
        <DesktopHDCopy/>
        <WaysToGive/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
