import React, { Component } from 'react';
import './AffiliatePrograms.css';
import Arrow from '../Images/AffProgramsIcon.png';

export default class AffiliatePrograms extends Component {
    render() {
        return(
          <div className="AffProgramsWrapper">
            <div className="AffProgramsTitle">Support Us While Shopping</div>
            <div id="AffProgramsWrapper">
              <div className="AffProgramsItem">
                <div className="AffProgrmasTextWrapper">
                  <div className="AffProgramsItemTitle">Amazon Smile</div>
                  <p>If you shop on Amazon, shop through Amazon Smile and sign up to support Friends of Texas Wildlife.  For all eligible purchases, a portion of what you spend will be donated to us directly!</p>
                </div>
                <img className="AffIcon" src={Arrow}/>
              </div>
              <div className="AffProgramsItem">
                <div className="AffProgrmasTextWrapper">
                  <div className="AffProgramsItemTitle">eBay Giving Works</div>
                  <p>Through EBay Giving Works, you can donate a percentage or the entirety of proceeds of whatever you sell on EBay to Friends of Texas Wildlife. What a great way to clean out your closets and help Friends at the same time!</p>
                </div>
                <img className="AffIcon" src={Arrow}/>
              </div>
              <div className="AffProgramsItem">
                <div className="AffProgrmasTextWrapper">
                  <div className="AffProgramsItemTitle">Kroger Community Rewards</div>
                  <p>Kroger's Community Rewards program allows you to link favorite charities directly to your Kroger Plus card.  A portion of everything you purchase will be donated back to Friends of Texas Wildlife.</p>
                </div>
                <img className="AffIcon" src={Arrow}/>
              </div>
              <div className="AffProgramsItem">
                <div className="AffProgrmasTextWrapper">
                  <div className="AffProgramsItemTitle">Visit Our Shop</div>
                  <p>Support us by buying from our own online store! We have animals plushies, apparel and more!</p>
                </div>
                <img className="AffIcon" src={Arrow}/>
              </div>
            </div>

          </div>
          )

  }

}
