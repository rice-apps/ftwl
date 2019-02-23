import React, { Component } from 'react';
import './App.css';
import BlogTest from "./BlogTest.js";

import FrontPage from './Pages/FrontPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <FrontPage/>
      </div>
    );
  }
}

export default App;
