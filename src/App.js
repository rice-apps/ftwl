import React, { Component } from 'react';
import './App.css';

import './styles.css'

import FrontPage from './Pages/FrontPage.js';
import MenuBar from './Pages/MenuBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar/>
      </div>
    );
  }
}

export default App;
