import React, { Component } from 'react';
import SupplyImg from '../Images/pet_supplies.png';
import CrateImg from '../Images/dog_crate.png';
import ShoppingImg from '../Images/shopping_basket.png';
import PartyImg from '../Images/party_icon.png';
import './HowYouCanHelp.css';

export default class HowYouCanHelp extends Component {
    render() {
        return(
          <div className="HowHelpWrapper">
            <h1>How You Can Help</h1>
            <div id="HowHelpOptionWrapper">
              <div className="HowHelpItem">
                <div className="HowHelpIcon"><img id="DogCrateIcon" src={CrateImg}/><img id="PetSupplyIcon" src={SupplyImg}/></div>
                <h2>Donate Directly</h2>
                <div className="HowHelpDescription">View and give the supplies we need the most </div>
              </div>
              <div className="HowHelpItem">
                <div className="HowHelpIcon"><img id="ShoppingIcon" src={ShoppingImg}/></div>
                <h2>Support Us While Shopping</h2>
                <div className="HowHelpDescription">Support us while you shop, both online and offline</div>
              </div>
              <div className="HowHelpItem">
                <div className="HowHelpIcon"><img id="PartyIcon" src={PartyImg}/></div>
                <h2>Host A Party</h2>
                <div className="HowHelpDescription">Support the animals while giving your child a unique and memorable birthday party  </div>
              </div>
            </div>
          </div>
          )

  }

}
