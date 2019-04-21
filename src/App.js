import React, { Component } from 'react';
import './App.css';
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
import Volunteer from './Pages/Volunteer.js';




class App extends Component {

  render() {
    return (
      <div className="App">

      <div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=533354427117925&autoLogAppEvents=1"></script>

        <TopBar/>
        <FrontPage/>
        <DesktopHDCopy/>
        <NeedAssistance/>
        <WaysToGive2/>
        <WaysToGive/>
        <HowYouCanHelp/>
        <AffiliatePrograms/>
        <HostAParty/>
        <EventsAndNews/>
        <FoundAnimalInfo/>
        <Volunteer/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
