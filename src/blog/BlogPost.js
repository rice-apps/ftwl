import React from 'react';


const BlogPost = (props) => (
  <div>
  <h1>Blog Post</h1>
  <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);
export default BlogPost;
