import React, { Component } from 'react';
import './EventsAndNews.css';
import { Link } from 'react-router-dom';
import * as contentful from 'contentful';

export default class EventsAndNews extends React.Component{
  state = {
    title:"",
    imageUrl:""
  };

  client = contentful.createClient({
    space : "qwlr9ed2q5br",
    accessToken:
    "cdae6ab657696ec69c4adfe078db6f307a6aee95eda8e2096c29056cf0c15d72"
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  hasNews = true;

  setPosts = response => {
    if (response.items.length < 1) {
      this.hasNews = false;
      return;
    }
    var latestNews = response.items[0].fields;
    response.items.forEach(function (item) {
      var dateA = new Date(latestNews.date);
      var dateB = new Date(item.fields.date);
      if (dateA < dateB) {
        latestNews = item.fields;
      }
    });
    this.setState({
      title: latestNews.title,
      imageUrl: latestNews.image != undefined ? 'https:' + latestNews.image[0].fields.file.url : null
    });
    console.log(latestNews);
  }

  fetchPosts = () => this.client.getEntries(
    {'content_type': "news"}
  );


  render() {
    return (
      <div id = "EventsWrapper">
        <div id = "events">
        <p class = "title">Upcoming Events</p>
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=533354427117925&autoLogAppEvents=1"></script>
        <div class="fb-page" data-href="https://www.facebook.com/SavingTexasWildlife/" data-tabs="events" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/SavingTexasWildlife/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/SavingTexasWildlife/">Friends of Texas Wildlife</a></blockquote></div>
        </div>

        <div id = "news">
        <p class = "title">Latest News</p>
        {
          (this.state.imageUrl != null && this.hasNews) ? <img id = "latestImage" src = {this.state.imageUrl}/> : <div></div>
        }
        <p id = "currentTitle">{this.state.title}</p>
        <Link to={{pathname: "/news"}} id = "link">
          See all News
        </Link>
        </div>

      </div>
    )
  }


}
