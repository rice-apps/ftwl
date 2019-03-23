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

      <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=533354427117925&autoLogAppEvents=1"></script>

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
