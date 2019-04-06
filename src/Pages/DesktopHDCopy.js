import React, { Component } from 'react';

import './DesktopHDCopy.css';

import Menu from './MenuBar.js';

export default class AboutUs extends Component {
    render() {
        return(
          <div className="DHDCopyWrapper">
            <Menu />
            <div id="DHDMain">
              <div id="DHDTextWrapper">
                <h1>Friends of Texas Wildlife</h1>
                <h2>Giving wildlife a second chance.</h2>
                <div id="learnBox">LEARN MORE</div>
              </div>
            </div>
          </div>
          )

  }

}
