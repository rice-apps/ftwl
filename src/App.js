import React, { Component } from 'react';
import './App.css';
import DesktopHDCopy from './Pages/DesktopHDCopy.js';
import NeedAssistance from './Pages/NeedAssistance.js';
import WaysToGive2 from './Pages/WaysToGive2.js';
import BottomBar from './Pages/BottomBar.js';
import EventsAndNews from './Pages/EventsAndNews.js';
import FoundAnimal from './Pages/FoundAnimal.js';
import HowYouCanHelp from './Pages/HowYouCanHelp.js';
import AffiliatePrograms from './Pages/AffiliatePrograms.js';
import HostAParty from './Pages/HostAParty.js';
import FoundAnimalInfo from './Pages/FoundAnimalInfo.js';
import MenuBar from './Pages/MenuBar.js';
import Volunteer from './Pages/Volunteer.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import DonateDirectly from './Pages/DonateDirectly.js';
import NewsList from './news/NewsList.js';
import NewsPost from './news/NewsPost.js';



class App extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <Router>
          <Switch>
            <Route exact path="/" component={DesktopHDCopy} />
            <Route path="/affiliates" component={AffiliatePrograms} />
            <Route path="/donatedirectly" component={DonateDirectly} />
            <Route path="/events" component={EventsAndNews} />
            <Route path="/foundanimal" component={FoundAnimal} />
            <Route path="/foundanimalinfo" component={FoundAnimalInfo} />
            <Route path="/hostparty" component={HostAParty} />
            <Route path="/howtohelp" component={HowYouCanHelp} />
            <Route path="/needassistance" component={NeedAssistance} />
            <Route exact path='/news' component={NewsList} />
            <Route exact path="/news/:id" component={NewsPost} />
            <Route path="/volunteer" component={Volunteer} />
            <Route path="/waystogive" component={WaysToGive2} />
          </Switch>
        </Router>
        <BottomBar />
      </div>
    );
  }
}

export default App;
