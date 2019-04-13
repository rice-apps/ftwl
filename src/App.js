import React, { Component } from 'react';
import './App.css';
import BlogTest from "./BlogTest.js";
import FrontPage from './Pages/FrontPage.js';
import DesktopHDCopy from './Pages/DesktopHDCopy.js';
import NeedAssistance from './Pages/NeedAssistance.js';
import WaysToGive from './Pages/WaysToGive.js';
import WaysToGive2 from './Pages/WaysToGive2.js';
import BottomBar from './Pages/BottomBar.js';
import EventsAndNews from './Pages/EventsAndNews.js';
import TopBar from './Pages/TopBar.js';
import FoundAnimal from './Pages/FoundAnimal.js';
import HowYouCanHelp from './Pages/HowYouCanHelp.js';
import AffiliatePrograms from './Pages/AffiliatePrograms.js';
import HostAParty from './Pages/HostAParty.js';
import FoundAnimalInfo from './Pages/FoundAnimalInfo.js';




class App extends Component {
  render() {
    return (
      <div className="App">
        <DesktopHDCopy/>
        <NeedAssistance/>
        <WaysToGive2/>
        <WaysToGive/>
        <HowYouCanHelp/>
        <AffiliatePrograms/>
        <HostAParty/>
        <EventsAndNews/>
        <FoundAnimalInfo/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
