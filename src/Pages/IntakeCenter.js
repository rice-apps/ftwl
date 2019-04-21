import React, { Component } from 'react';
import './IntakeCenter.css';
import Image1 from '../Images/outreach_maskedkid.png';
import Image2 from '../Images/intakecenter2.png';

export default class IntakeCenter extends Component {
    render() {
        return(
          <div className="IntakeWrapper">
            <div className="IntakeTitle">Intake Center</div>
            <div className="IntakeContentWrapper">
              <div className="IntakeItemWrapper">
                <div className="IntakeTextWrapper">
                  <div className="IntakeHeader">Intake Center</div>
                  <p>Our intake center is located just outside the west entrance of The Woodlands at:</p>
                  <p>29615 Highland Blvd<br/>Magnolia, TX  77354</p>
                  <p>Open 10 AM - 2 PM<br/>Monday-Saturday</p>
                  <p><b>Please do not bring animals to our intake center unless you spoken with our intake
                  center first to be sure we are open and ready to receive the animal. </b></p>
                </div>
                <img className="IntakeImage" src={Image2}/>
              </div>
              <div className="IntakeItemWrapper">
                <div className="IntakeTextWrapper">
                  <div className="IntakeHeader">Visitor Center</div>
                  <p>Our center is  open to the public the second Saturday of every month from 10 am to
                  2 pm for an admission of $5 per person. Come and see some of our educational animal
                  ambassadors (opossum, owls, turtles, snake, and/or hawk), view our educational displays,
                  enjoy some hands-on exploring, and make a fun craft to take home.</p>
                  <p>We also offer many educational opportunities at our visitor's center (camps, birthday
                    parties, educational presentations) which can be scheduled by appointment by emailing.</p>
                  <div className="IntakeEmailBox">
                    <h4>EMAIL US</h4>
                    <h3>ftwl.education@gmail.com</h3>
                  </div>
                </div>

              </div>
            </div>
          </div>
          )

  }

}
