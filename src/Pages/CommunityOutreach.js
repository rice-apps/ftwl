import React, { Component } from 'react';
import './CommunityOutreach.css';
import Image1 from '../Images/outreach_maskedkid.png';
import Image2 from '../Images/outreach_deer.png';

export default class CommunityOutreach extends Component {
    render() {
        return(
          <div className="COWrapper">
            <div className="COTitle">Education and Community Outreach</div>
            <div className="COContentWrapper">
              <div className="COTextWrapperTop">
                <div className="COHeader">Background</div>
                <p>We participates in many community, civic, and school events
                as part of our education and outreach program. It is part of our mission to the community.
                In addition to familiarizing the public with Friends of Texas Wildlife and what we do,
                presentions pertaining to coexisiting with local wildlife and  knowing when and how to
                assist animals in need can be scheduled.  </p>
              </div>
              <div className="COBottomContentWrapper">
                <div className="COTextWrapperBottom">
                  <div className="COHeader">Community Events</div>
                  <ul>
                    <li>Earth Day</li>
                    <li>National Night Out</li>
                    <li>Texas Wildlife & Woodland Expo at Lone Star College</li>
                    <li>Annual Fall Festival</li>
                  </ul>
                  <div className="COHeader">Outreach</div>
                  <ul>
                    <li>The Woodlands Children's Museum</li>
                    <li>Garden Clubs</li>
                    <li>Business Professionals' Groups</li>
                    <li>Boy and Girl Scout Functions and Camps</li>
                    <li>School Programs (both private and public).</li>
                  </ul>
                  <div className="COHeader">Media Outlet</div>
                  <ul>
                    <li>Texas Parks & Wildlife (publish news and information to help raise community awareness about wildlife issues)</li>
                  </ul>
                  <div className="CommunityOEmailBox">
                    <h4>EDUCATION CONTACT</h4>
                    <h3>ftwl.center@gmail.com</h3>
                  </div>
                </div>
                <div className="COImageWrapper">
                  <img className="COImage1" src={Image1}/>
                  <img className="COImage2" src={Image2}/>
                </div>
              </div>
            </div>
          </div>
          )

  }

}
