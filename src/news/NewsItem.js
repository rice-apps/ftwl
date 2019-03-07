import React from 'react';
import { Link } from 'react-router-dom';



const NewsItem = (props) => (
  <div className="box content">
    <h1>{props.title}</h1>
    <Link to={{
      pathname: `/news/${props.path}`,
      state: { props }
    }}>
    Read More
    </Link>
  </div>
);

export default NewsItem;
