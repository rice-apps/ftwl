import React, { Component } from 'react';
import './TopBar.css';

import MenuBar from './MenuBar.js';

export default class TopBar extends Component {
  render() {
    return (
      <div>
        <MenuBar />
      </div>
    )
  }
}
