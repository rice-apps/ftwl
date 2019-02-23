import React, { Component } from 'react';
import './WaysToGive.css';

export default class WaysToGive extends Component {
    render() {
        return(
          <div>
          <div className="MenuPlaceholder"></div>
            <div className="W2GBannerWrapper">
              <div id="W2GBannerText">
                <div id="W2GBannerTitle">The Animals Need Your Help</div>
                <p>We depend entirely on donations to support the immediate veterinary
                care that saves the lives of the malnourished and injured wildlife.
                There are many ways you can help the animals at Friends of Texas Wildlife.</p>
              </div>
            </div>
            <div className="W2GContentWrapper">
              <div id="W2GContent">
                <div className="W2GItem">
                  <div className="W2Gplaceholder"></div>
                  <h1>Give Funds</h1>
                  <p>We depend entirely on donation and 100% of all donations support native Texas wildlife!</p>
                  <div className="orangeLink">Donate</div>
                </div>
                <div className="W2GItem">
                  <div className="W2Gplaceholder"></div>
                  <h1>Volunteer</h1>
                  <p>We need volunteers for animal care, administration, educational programs, fundraising, and more.</p>
                  <div className="orangeLink">Volunteer</div>
                </div>
                <div className="W2GItem">
                  <div className="W2Gplaceholder"></div>
                  <h1>Support While Shopping</h1>
                  <p>Support us while you’re shopping online and in-store with our affiliate programs!</p>
                  <div className="orangeLink">More Info</div>
                </div>
                <div className="W2GItem">
                  <div className="W2Gplaceholder"></div>
                  <h1>Give Supplies</h1>
                  <p>We require many common household items and pet supplies to care for sick and injured wildlife.</p>
                  <div className="orangeLink">More Info</div>
                </div>
              </div>
            </div>
          </div>
          )

  }

}
