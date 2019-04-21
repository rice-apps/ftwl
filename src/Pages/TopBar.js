import React, { Component } from 'react';
import './TopBar.css';

import MenuBar from './MenuBar.js';

export default class TopBar extends Component {
  render() {
    return (
      <div>
          <MenuBar />
        <div>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="7B42V8JE9E4YN" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
      </div>
    )
  }
}
