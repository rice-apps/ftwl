import React, { Component } from 'react';
import './Donate.css';
import DonatePic from '../Images/donatePic.png';

export default class Donate extends Component {
    render() {
        return(
          <div className="DonateWrapper">
            <div className="DonateTitle">Donate</div>
            <div className="DonateContentWrapper">
              <div className="DonateTextWrapper">
                <div className="DonateHeader">Every dollar helps us save animals.</div>
                <p>We depend entirely on donations to provide for the veterinary care that saves the lives of the malnourished, seriously injured, and sick wildlife.</p>
                <div className="DonateButton">Donate</div>
                <div className="DonateHeader">Do you know how much it costs to rehabilitate an animal?</div>
                <div className="DonateCostWrapper">
                  <div className="DonateCost">$25</div>
                  <div className="DonateCostText">Provides one month care for song birds</div>
                </div>
                <div className="DonateCostWrapper">
                  <div className="DonateCost">$50</div>
                  <div className="DonateCostText">Takes care of a rabbit through release</div>
                </div>
                <div className="DonateCostWrapper">
                  <div className="DonateCost">$100</div>
                  <div className="DonateCostText">Takes care of a squirrel through release</div>
                </div>
                <div className="DonateCostWrapper">
                  <div className="DonateCost">$200</div>
                  <div className="DonateCostText">Takes care of a raptor through release</div>
                </div>
              </div>
              <img className="DonateImage" src={DonatePic}/>
            </div>
          </div>
          )

  }

}
