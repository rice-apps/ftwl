import React, { Component } from 'react';
import './Volunteer.css';

export default class Volunteer extends Component {
    render() {
        return(
          <div className="VolunteerWrapper">
            <div className="Title">Volunteer</div>
            <div className="VolunteerSubtitle">Friends of Texas Wildlife has no paid staff and relies totally on caring volunteers to help fulfill its mission. Our volunteers fall under two categories:</div>
            <div className="VolunteerButton"><h4>CLICK HERE TO VOLUNTEER!</h4></div>
            <div className="VolunteerCategoryWrapper">
              <div className="VolunteerCategoryItem">
                <div className="VolunteerCategoryTitle">REHABILITATORS</div>
                <div className="VolunteerCategorySubtitle">Individuals interested in becoming rehabilitators must: </div>
                <p>1) Become a member of Friends of Texas Wildlife<br/><br/>2) Participate in ongoing education efforts</p>
                <p><br/>Each prospective rehab volunteer will be partnered with a trained, permitted rehabilitator.</p>
              </div>
              <div className="VolunteerCategoryItem">
                <div className="VolunteerCategoryTitle">ADMINISTRATIVE</div>
                <div className="VolunteerCategorySubtitle">Administrative volunteers are needed at areas such as:</div>
                <p>Animal Intake at our center<br/><br/>Fundraising<br/><br/>Marketing & Public Relations<br/><br/>Community Outreach<br/><br/>Education<br/><br/>…and more!</p>
              </div>
            </div>
          </div>
          )

  }

}
