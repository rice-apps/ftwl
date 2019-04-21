import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as contentful from 'contentful';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch, Route } from 'react-router';
import NewsList from "./news/NewsList.js";
import NewsPost from "./news/NewsPost.js";
import DonateDirectly from './Pages/DonateDirectly.js';
import AffiliatePrograms from './Pages/AffiliatePrograms.js';
import EventsAndNews from './Pages/EventsAndNews.js';


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/affiliates" component={AffiliatePrograms} />
      <Route path="/events" component={EventsAndNews} />
    </Switch>
  </Router>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA



serviceWorker.unregister();
