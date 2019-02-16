import React from 'react';

const BlogItem = (props) => (
  <div className="box content">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
);

export default BlogItem;
