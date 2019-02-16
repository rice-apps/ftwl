import React, { Component } from 'react';
import './BottomBar.css';
import FB from '../Images/Facebook Icon.jpg';
import Twitter from '../Images/Twitter Icon.jpg';

export default class AboutUs extends Component {
    render() {
        return(
          <div className="BottomBarWrapper">
            <div id="BBTextWrapper">
              <div id="BBShortIntro">
                <h1>Friends of Texas Wildlife</h1>
                <p>Friends of Texas Wildlife is a 501(c)(3) non-profit organization;
                100% of all donations support native Texas wildlife and are tax deductible
                to the extent permitted by law.</p>
              </div>
              <div className="BBTitles">AboutUs</div>
              <div className="BBTitles">Ways to Give</div>
              <div className="BBTitles">Found an <br/>Animal</div>
              <div className="BBTitles">News & <br/>Events</div>
              <div className="BBTitles">Store</div>
            </div>
            <div className="SocialMIcons">
              <a href="https://www.facebook.com/SavingTexasWildlife"><img className="Icons" src = {FB}/></a>
              <a href="https://twitter.com/FriendsofTexas"><img className="Icons" src = {Twitter}/></a>
            </div>
          </div>
          )

  }

}
