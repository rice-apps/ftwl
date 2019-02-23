import React from 'react';
import { Link } from 'react-router-dom';



const BlogItem = (props) => (
  <div className="box content">

  <Link to={{
    pathname: `/blog${props.path}`,
    state: { props }
  }}>
  Read More
  </Link>

    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
);

export default BlogItem;
