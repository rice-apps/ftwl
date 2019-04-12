import React, { Component } from 'react';
import './HostAParty.css';

export default class HostAParty extends Component {
    render() {
        return(
          <div className="HostPartyWrapper">
            <h1>Host a Party</h1>
            <div id="HostPartyContentWrapper">
              <div className="HostPartyTextWrapper">
                <div className="HostPartyHeader">Give your child a wild party</div>
                <p>We offer birthday parties for every age group!</p>
                <p>ages 4-6<br/>ages 7-9<br/>ages 7-10+<br/>ages 10+</p>
                <p>"Wild Babies"<br/>"Scales & Tails"<br/>"Hoot, Hoot, Hooray"<br/>"Critter CS!"</p>
                <p>Meet a furry friend and learn how to help wildlife<br/>Critters that slither and crawl<br/>A feathered friend will fly your way<br/>Find out what animal left its tracks</p>
                <p>All parties are scheduled for 2 hours:<br/>15 min. set up by parents<br/>60 min. for wildlife program*<br/>30 min. for celebration<br/>15 min. for clean-up by parents</p>
                <p>Please encourage guests to arrive on time. Party will start and end at scheduled time. If it rains, the party is held inside, and any outdoor games will be moved inside.</p>
                <div className="HostPartyHeader">What we provide:</div>
                <p>Party Host, decorations, craft/activity, and a special gift for the birthday child.</p>
                <div className="HostPartyHeader">What you provide:</div>
                <p>Refreshments (snacks, drink, cake). Please note that there is no refridgerator or stove available. Local pizza may be ordered and delivered to 29816 Dobbin Hufsmith, Magnolia, 77354</p>
                <p>Price: <br/>$300 - limit 15 children including siblings, $10 per additional child, maximum 25 children. Guest limit 35 (includes both children and adults)</p>
              </div>
              <div className="HostPartyImage"></div>
            </div>
          </div>
          )

  }

}
