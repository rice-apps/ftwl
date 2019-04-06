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



class App extends Component {
  initializeReactGA() {
    ReactGA.initialize('UA-137795173-2');
    ReactGA.pageview('/');
  }
  componentDidMount(){
    this.initializeReactGA();
  }
  render() {
    return (
      <div className="App">

        <TopBar/>
        <FrontPage/>
        <DesktopHDCopy/>
        <NeedAssistance/>
        <WaysToGive2/>
        <WaysToGive/>
        <EventsAndNews/>
        <BottomBar/>
      </div>
    );
  }
}

export default App;
