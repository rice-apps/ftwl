import React, { Component } from 'react';
import * as contentful from 'contentful';
import NewsItem from './NewsItem.js';

class NewsList extends React.Component{
  state = {
    posts:[]
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
    this.setState({
      posts: response.items
    });
  }

  fetchPosts = () => this.client.getEntries({'content_type': "news"});


  render() {
    return (
      <div>
      <br/>
      { this.state.posts.map(({fields}, i) =>
        <NewsItem key={i} {...fields} />
      )}
      </div>
    )
  }


}

export default NewsList;
