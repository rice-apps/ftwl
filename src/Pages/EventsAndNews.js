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

  setPosts = response => {
    var latestNews = response.items[response.items.length - 1].fields;
    this.setState({
      title: latestNews.title,
      imageUrl: 'https:' + latestNews.image[0].fields.file.url
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
        </div>

        <div id = "news">
        <p class = "title">Latest News</p>
        <img id = "latestImage" src = {this.state.imageUrl}/>
        <p id = "currentTitle">{this.state.title}</p>
        <Link to={{pathname: "/news"}} id = "link">
          See all News
        </Link>
        </div>

      </div>
    )
  }


}
