import React from 'react';
import * as contentful from 'contentful';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


class NewsPost extends React.Component{
  state = {
    posts:[]
  };

  news = {};

  client = contentful.createClient({
    space : "qwlr9ed2q5br",
    accessToken:
    "cdae6ab657696ec69c4adfe078db6f307a6aee95eda8e2096c29056cf0c15d72"
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }


  setPosts = response => {
    this.setState({posts: response.items});
  }

  fetchPosts = () => this.client.getEntries({'content_type': "news"});


  render() {
    return (
      <div>
      {
        this.state.posts.map(item => {
          if (item.fields.path == this.props.match.params.id) {
            this.news = item.fields;
          }
        })
      }
      <h1>{this.news.title}</h1>
      <h3>{this.news.date}</h3>
      {
        this.news.image != undefined ? this.news.image.map(({fields}, i) =>
          <img key={i} src = {'https:' + fields.file.url}/>) : <div></div>
      }
      <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(this.news.content) }}></div>
      </div>
    );
  }
}

export default NewsPost;
