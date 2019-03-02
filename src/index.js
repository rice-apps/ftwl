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



ReactDOM.render(
  <Router>
  <div>
    <Route exact path='/' component={App}/>
    <Route exact path='/news' component={NewsList}/>
    <Route exact path = "/news/:id" component = {NewsPost}/>
  </div>
  </Router>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA



serviceWorker.unregister();
