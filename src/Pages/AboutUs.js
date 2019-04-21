import React, { Component } from 'react';
import './AboutUs.css';
import Image01 from '../Images/about_image_01.png';
import Image10 from '../Images/about_image_10.png';
import Image12 from '../Images/about_image_12.png';
import Image21 from '../Images/about_image_21.png';

export default class AboutUs extends Component {
    render() {
        return(
          <div className="AboutUsWrapper">
            <div className="AboutUsTitle">About Us</div>
            <div className="AboutUsSubTitle">Saving Animals Since 1994</div>
            <div className="AboutUsContentWrapper">
              <div className="AboutUsTextBox">
                <div className="AboutUsTextWrapper">
                  <div className="AboutUsHeader">Our Mission</div>
                  <p>We support the rehabilitation of native Texas wildlife and promote the co-existence of wildlife and people through education.</p>
                </div>
              </div>
              <img className="AboutUsImage" src={Image01}/>
              <div className="AboutUsTextBox">
                <div className="AboutUsTextWrapper">
                  <div className="AboutUsHeader">What We Do</div>
                  <p>We are a group of trained and permitted volunteers who provide care for injured, displaced and orphaned wildlife in Montgomery and surrounding Counties. </p>
                  <p>We receive no money from either of these organizations.  Our ability to care for the thousands of animals we receive each year is entirely dependent on donations, memberships, and money raised at our fundraisers.</p>
                </div>
              </div>
              <img className="AboutUsImage" src={Image10}/>
              <div className="AboutUsTextBox">
                <div className="AboutUsTextWrapper">
                  <div className="AboutUsHeader">Education and Community Outreach</div>
                  <p>To familiarize the public with Friends of Texas Wildlife and how to coexist and assist anmials in need, we participates in many community, civic, and school events as a part of our education and outreach program. </p>
                  <div className="AboutUsButton">Learn More</div>
                </div>
              </div>
              <img className="AboutUsImage" src={Image12}/>
              <div className="AboutUsTextBox">
                <div className="AboutUsTextWrapper">
                  <div className="AboutUsHeader">Our Intake Center</div>
                  <p>Our center functions as an intake facility where animals are admitted, triaged, and treated. While some animals with minor injuries stay at the center, most animals are placed with one of our many diverse and dedicated home-based permitted rehabilitators.  </p>
                  <div className="AboutUsButton">Learn More</div>
                </div>
              </div>
              <img className="AboutUsImage" src={Image21}/>
              <div className="AboutUsTextBox">
                <div className="AboutUsTextWrapper">
                  <div className="AboutUsHeader">Our Board Members</div>
                  <p>We are a group of trained and permitted volunteers who provide care for injured, displaced and orphaned wildlife in Montgomery and surrounding Counties.  We are the only wildlife rescue group based in Montgomery County with rehabbers permitted by U.S. Fish & Wildlife and Texas Parks & Wildlife Departments. </p>
                  <div className="AboutUsButton">Learn More</div>
                </div>
              </div>
            </div>

          </div>
          )

  }

}
