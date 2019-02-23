import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


const text = {
    "data": {},
    "content": [
      {
        "data": {},
        "content": [
          {
            "data": {},
            "marks": [
              {
                "type": "bold"
              }
            ],
            "value": "bold ",
            "nodeType": "text"
          },
          {
            "data": {},
            "marks": [
              {
                "type": "italic"
              }
            ],
            "value": "italic ",
            "nodeType": "text"
          },
          {
            "data": {},
            "marks": [
              {
                "type": "underline"
              }
            ],
            "value": "underline",
            "nodeType": "text"
          }
        ],
        "nodeType": "paragraph"
      },
      {
        "data": {},
        "content": [
          {
            "data": {},
            "marks": [],
            "value": "heading1",
            "nodeType": "text"
          }
        ],
        "nodeType": "heading-1"
      },
      {
        "data": {},
        "content": [
          {
            "data": {},
            "marks": [],
            "value": "",
            "nodeType": "text"
          },
          {
            "data": {
              "uri": "https://www.contentful.com/developers/docs/concepts/rich-text/"
            },
            "content": [
              {
                "data": {},
                "marks": [],
                "value": "hyperlink",
                "nodeType": "text"
              }
            ],
            "nodeType": "hyperlink"
          },
          {
            "data": {},
            "marks": [],
            "value": "",
            "nodeType": "text"
          }
        ],
        "nodeType": "paragraph"
      },
      {
        "data": {},
        "content": [
          {
            "data": {},
            "content": [
              {
                "data": {},
                "content": [
                  {
                    "data": {},
                    "marks": [],
                    "value": "bullet1",
                    "nodeType": "text"
                  }
                ],
                "nodeType": "paragraph"
              }
            ],
            "nodeType": "list-item"
          },
          {
            "data": {},
            "content": [
              {
                "data": {},
                "content": [
                  {
                    "data": {},
                    "marks": [],
                    "value": "bullet2",
                    "nodeType": "text"
                  }
                ],
                "nodeType": "paragraph"
              }
            ],
            "nodeType": "list-item"
          }
        ],
        "nodeType": "unordered-list"
      },
      {
        "data": {},
        "content": [
          {
            "data": {},
            "content": [
              {
                "data": {},
                "content": [
                  {
                    "data": {},
                    "marks": [],
                    "value": "number1",
                    "nodeType": "text"
                  }
                ],
                "nodeType": "paragraph"
              }
            ],
            "nodeType": "list-item"
          },
          {
            "data": {},
            "content": [
              {
                "data": {},
                "content": [
                  {
                    "data": {},
                    "marks": [],
                    "value": "number2",
                    "nodeType": "text"
                  }
                ],
                "nodeType": "paragraph"
              }
            ],
            "nodeType": "list-item"
          }
        ],
        "nodeType": "ordered-list"
      },
      {
        "data": {},
        "content": [
          {
            "data": {},
            "marks": [],
            "value": "heading2",
            "nodeType": "text"
          }
        ],
        "nodeType": "heading-2"
      },
      {
        "data": {},
        "content": [
          {
            "data": {},
            "marks": [],
            "value": "",
            "nodeType": "text"
          }
        ],
        "nodeType": "paragraph"
      },
      {
        "data": {},
        "content": [
          {
            "data": {},
            "marks": [],
            "value": "",
            "nodeType": "text"
          }
        ],
        "nodeType": "paragraph"
      }
    ],
    "nodeType": "document"
  };


const newText = documentToHtmlString(text);

const BlogPost = ({ location: { state: { props } }}) => (
  <div>
  <h1>{props.title}</h1>
  <p>{props.content}</p>
  <p>{documentToHtmlString(props.richText)}</p>
  </div>
);


export default BlogPost;
