import React, { Component } from 'react';
import './TopBar.css';

export default class TopBar extends Component {
    render() {
        return (
            <div>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="7B42V8JE9E4YN" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="http://ftwl.server268.com/sites/all/themes/unitebusiness/images/icons/please_donate.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>


            <div class="fb-page"
              data-href="https://www.facebook.com/facebook"
              data-width="380"
              data-hide-cover="false"
              data-show-facepile="false"></div>
            </div>
        )
    }
}
