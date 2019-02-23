import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


const BlogPost = ({ location: { state: { props } }}) => (
  <div>
  <h1>{props.title}</h1>
  <p>{props.content}</p>
  <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(props.richText) }}></div>
  </div>
);




export default BlogPost;
