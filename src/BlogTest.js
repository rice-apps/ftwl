import React, { Component } from 'react';
import * as contentful from 'contentful';
import BlogItem from './blog/BlogItem.js';

class BlogTest extends React.Component{
  state = {
    posts:[]
  };

  client = contentful.createClient({
    space : "k3o8ha3m8w2t",
    accessToken:
    "9a5963d645e15f622d3fe7ea9fb35be2a2bde514c4a0fccebd8ef322269c39c5"
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  fetchPosts = () => this.client.getEntries();


  render() {
    return (
      <div>
      Hello
      <br/>
      { this.state.posts.map(({fields}, i) =>
        <BlogItem key={i} {... fields} />
      )}
      </div>
    )
  }


}

export default BlogTest;
