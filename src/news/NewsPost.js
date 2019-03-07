import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


const NewsPost = ({ location: { state: { props } }}) => (
  <div>
  <h1>{props.title}</h1>
  {props.image.map(({fields}, i) =>
    <img key={i} src = {'https:' + fields.file.url}/>
  )}
  <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(props.content) }}></div>
  </div>
);




export default NewsPost;
