import React, { Component } from 'react';
import './HostAParty.css';
import PartyPic from '../Images/partyPic.png';

export default class HostAParty extends Component {
    render() {
        return(
          <div className="HostPartyWrapper">
            <div className="Title">Host a Party</div>
            <div id="HostPartyContentWrapper">
              <div className="HostPartyTextWrapper">
                <div className="HostPartyHeader">Give your child a wild party</div>
                <p>We offer birthday parties for every age group:</p>
                <p><b><i>Wild Babies</i></b><br/>Meet a furry friend and learn how to help wildlife<br/>Ages 4-6</p>
                <p><b><i>Scales & Tails</i></b><br/>Critters that slither and crawl<br/>Ages 7-9</p>
                <p><b><i>Hoot, Hoot, Hooray</i></b><br/>A feathered friend will fly your way<br/>Ages 7-10+</p>
                <p><b><i>Critter CSI</i></b><br/>Find out what animal left its tracks<br/>Ages 10+</p>
                <p>All parties are scheduled for 2 hours:<br/>15 min. set up by parents<br/>60 min. for wildlife program*<br/>30 min. for celebration (cake, open gifts)<br/>15 min. for clean-up by parents</p>
                <p>Please encourage guests to arrive on time. Party will start and end at scheduled time. If it rains, the party is held inside, and any outdoor games will be moved inside.</p>
                <div className="HostPartyHeader">What we provide:</div>
                <p>Party Host, decorations, craft/activity, and a special gift for the birthday child.</p>
                <div className="HostPartyHeader">What you provide:</div>
                <p>Refreshments (snacks, drink, cake). Please note that there is no refridgerator or stove available. Local pizza may be ordered and delivered to 29816 Dobbin Hufsmith, Magnolia, 77354</p>
                <div className="HostPartyHeader">Pricing:</div>
                <p>$300 - limit 15 children including siblings, $10 per additional child, maximum 25 children. Guest limit 35 (includes both children and adults)</p>
                <p>$100 deposit: $50 to hold date and $50 security deposit.<br/>Balance due before party begins</p>
                <div className="HostPartyHeader">Scheduling:</div>
                <p>Party times are 10:00 a.m., 1:00 p.m., and 4:00 p.m. on Saturdays. Fridays 4:00 p.m. only. </p>
              </div>
              <img className="HostPartyImage" src={PartyPic}/>
            </div>
            <div className="HostPartyCallWrapper">
              <div className="ContactBox">
                <h4>CALL US</h4>
                <h2>281-259-0039</h2>
              </div>
              <div className="ContactBox">
                <h4>Email US</h4>
                <h3>ftwl.education@gmail.com</h3>
              </div>
            </div>
          </div>
          )

  }

}
