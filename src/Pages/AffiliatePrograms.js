import React, { Component } from 'react';
import './AffiliatePrograms.css';

export default class AffiliatePrograms extends Component {
    render() {
        return(
          <div className="AffProgramsWrapper">
            <div className="AffProgramsTitle">Support Us While Shopping</div>
            <div id="AffProgramsWrapper">
              <div className="AffProgramsItem">
                <div className="AffProgramsItemTitle">Amazon Smile</div>
                <p>We are in need of many items to keep the animals happy and healthy. These are just some of the items we use on a daily basis. For specific items, see our Amazon wish list.</p>
                <p>To donate items, visit our rehab center during our business hours or contact us.</p>
              </div>
              <div className="AffProgramsItem">
                <div className="AffProgramsItemTitle">eBay Giving Works</div>
                <p>Through EBay Giving Works, you can donate a percentage or the entirety of proceeds of whatever you sell on EBay to Friends of Texas Wildlife. What a great way to clean out your closets and help Friends at the same time!</p>
              </div>
              <div className="AffProgramsItem">
                <div className="AffProgramsItemTitle">Kroger Community Rewards</div>
                <p>Kroger's Community Rewards program allows you to link favorite charities directly to your Kroger Plus card.  A portion of everything you purchase will be donated back to Friends of Texas Wildlife.</p>
                <p>To enable, (insert updated instructions here).</p>
              </div>
              <div className="AffProgramsItem">
                <div className="AffProgramsItemTitle">Visit Our Shop</div>
                <p>Support us by buying from our own online store! We have animals plushies, apparel and more.</p>
              </div>
            </div>

          </div>
          )

  }

}
