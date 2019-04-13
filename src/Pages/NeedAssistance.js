import React, { Component } from 'react';
import BunnyPic from '../Images/NA_bunny.png';
import CallIcon from '../Images/call_icon.png';
import ClockBG from '../Images/Oval 2.png';
import ClockHand from '../Images/Line.png';
import Calendar from '../Images/calendar.png';
import './NeedAssistance.css';

export default class NeedAssistance extends Component {
    render() {
        return(
          <div className="NAWrapper">
            <img id="randbunny" src={BunnyPic}/>
            <div className="NATextWrapper">
              <div className="NAText">
                <div id="NATitle">Found an animal?</div>
                <div className="NAinfo"><img id="callIcon" src = {CallIcon}/>Call us at 281-259-0039.</div>
                <div className="NAinfo"><img id="clockBg" src = {ClockBG}/><img id="clockHand" src = {ClockHand}/> 10 AM to 2 PM </div>
                <div className="NAinfo"><img id="calendarIcon" src = {Calendar}/>Monday through Saturday</div>
                <div id="NAparagraph">
                  <p>For assistance after hours, please utilize the resources on this website.
                  Unfortunately, as a volunteer organization, we are unable to provide 24-hour assistance.<br/>
                  <br/>
                  Please call ahead before bringing animals to our center so that we are ready to assist you!</p>
                </div>
                <div id="WildlifeHelpBox">WILDLIFE HELP</div>
              </div>
            </div>
          </div>
          )

  }

}
