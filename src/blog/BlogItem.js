import React from 'react';
import { Link } from 'react-router-dom';
import './BlogItem.css';



const BlogItem = (props) => (
  <div className="box content">
    <h1 id = "blogTitle">{props.title}</h1>
    <p>{props.content}</p>

    <Link to={{
      pathname: `/blog/${props.path}`,
      state: { props }
    }}>
    Read More
    </Link>
  </div>
);

export default BlogItem;
