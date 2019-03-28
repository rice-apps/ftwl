import React, { Component } from 'react';
import './App.css';
import BlogTest from "./BlogTest.js";
import FrontPage from './Pages/FrontPage.js';
import DesktopHDCopy from './Pages/DesktopHDCopy.js';
import WaysToGive from './Pages/WaysToGive.js';
import BottomBar from './Pages/BottomBar.js';
import EventsAndNews from './Pages/EventsAndNews.js';
import TopBar from './Pages/TopBar.js';
import FoundAnimal from './Pages/FoundAnimal.js';


class App extends Component {
  render() {
    return (
      <div className="App">

        <TopBar/>
        <FrontPage/>
        <DesktopHDCopy/>
        <WaysToGive/>
        <EventsAndNews/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
