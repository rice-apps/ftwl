import React, { Component } from 'react';
import './DonateDirectly.css';
import DownArrow from '../Images/DownArrow.svg';

export default class DonateDirectly extends Component {
  constructor() {
    super();

    this.state = {
      sections = {
        animal_food: false,
        paper_plastic: false,
        cleaning: false,
        textiles: false,
        pet_supplies: false,
        hardware: false,
        other: false,
        specialty: false,
      }
    }


  }

  handleClick(section) {
    if (this.state.sections[section]) {
      this.state.sections[section] = false;
    } else {
      this.state.sections[section] = true;
    }
  }

  render() {
    return (
      <div id="donate_directly">

        <div id="intro">
          Donate Directly
          <p>
            We are in need of many items to keep the animals happy and healthy. These are just some of the items we use on a daily basis.
          </p>
          <p>
            To donate items, visit <a>our rehab center</a> during our business hours or <a>contact us</a> to arrange a donation.
          </p>
        </div>
        
        <div className="wrapper">
          <button onClick={this.handleClick("animal_food")}>
            Animal Food
            &nbsp;
            <img src={DownArrow} alt="arrow" />
          </button>

          {
            this.state.section["animal_food"]
              ? (
                <ul id="animal_food">
                  <li className="menuSubtext">Science Diet Feline Maintenance Light </li>
                  <hr/>
                  <li className="menuSubtext">Dry cat or kitten chow</li>
                  <hr/>
                  <li className="menuSubtext">Dry puppy or dog chow</li>
                  <hr/>
                  <li className="menuSubtext">Pecans (whole in shell or pieces, unsalted)</li>
                  <hr/>
                  <li className="menuSubtext">Peanuts (roasted, unsalted)</li>
                  <hr/>
                  <li className="menuSubtext">Gerber mixed baby cereal (dry in box)</li>
                  <hr/>
                  <li className="menuSubtext">Canned cat food</li>
                  <hr/>
                  <li className="menuSubtext">Pedialyte (or generic version)</li>
                  <hr/>
                  <li className="menuSubtext">Jarred baby food, meat (turkey or chicken)</li>
                  <hr/>
                  <li className="menuSubtext">Jarred baby food, fruit</li>
                  <hr/>
                  <li className="menuSubtext">Wild birdseed</li>
                  <hr/>
                  <li className="menuSubtext">Black oil sunflower seed</li>
                  <hr/>
                </ul>
              )
              : (
                null
              )
          }
        </div>

        <div className="wrapper">
          <button onClick={handleClick("paper_plastic")}>
            Paper & Plastic Items
            &nbsp;
            <img src={DownArrow} alt="arrow" />
          </button>

          {
            this.state.section["paper_plastic"]
              ? (
                <ul id="paper_plastic">
                  <li className="menuSubtext">Paper towels</li>
                  <hr/>
                  <li className="menuSubtext">Facial tissues</li>
                  <hr/>
                  <li className="menuSubtext">Large kitchen trash bags</li>
                  <hr/>
                  <li className="menuSubtext">Ziploc bags (gallon, quart, or sandwich sized)</li>
                  <hr/>
                  <li className="menuSubtext">Newspaper</li>
                  <hr/>
                  <li className="menuSubtext">White printer paper</li>
                  <hr/>
                  <li className="menuSubtext">Postage stamps</li>
                  <hr/>
                </ul>
              )
              : (
                null
              )
          }
        </div>

        <div className="wrapper">
          <button onClick={handleClick("cleaning")}>
            Cleaning Supplies
            &nbsp;
            <img src={DownArrow} alt="arrow" />
          </button>

          {
            this.state.section["cleaning"]
              ? (
                <ul id="cleaning">
                  <li className="menuSubtext">Cleaning supplies</li>
                  <hr/>
                  <li className="menuSubtext">Liquid bleach</li>
                  <hr/>
                  <li className="menuSubtext">Laundry detergent</li>
                  <hr/>
                  <li className="menuSubtext">Liquid dish soap</li>
                  <hr/>
                  <li className="menuSubtext">Disinfecting solutions</li>
                  <hr/>
                  <li className="menuSubtext">Liquid hand soap</li>
                  <hr/>
                  <li className="menuSubtext">Hand sanitizer</li>
                  <hr/>
                  <li className="menuSubtext">Scrub brushes</li>
                  <hr/>
                </ul>
              )
              : (
                null
              )
          }
        </div>

        <div className="wrapper">
          <button onClick={handleClick("textiles")}>
            Textiles
            &nbsp;
            <img src={DownArrow} alt="arrow" />
          </button>

          {
            this.state.section["textiles"]
              ? (
                <ul id="textiles">
                  <li className="menuSubtext">Towels or flat sheets (no holes)</li>
                  <hr/>
                  <li className="menuSubtext">Baby receiving blankets</li>
                  <hr/>
                  <li className="menuSubtext">Polar fleece blankets or fabric of any size</li>
                  <hr/>
                </ul>
              )
              : (
                null
              )
          }
        </div>

        <div className="wrapper">
          <button onClick={handleClick("pet_supplies")}>
            Pet Supplies
            &nbsp;
            <img src={DownArrow} alt="arrow" />
          </button>

          {
            this.state.section["pet_supplies"]
              ? (
                <ul id="pet_supplies">
                  <li className="menuSubtext">Pet carrier</li>
                  <hr/>
                  <li className="menuSubtext">Plastic aquariums / "critter keepers"</li>
                  <hr/>
                  <li className="menuSubtext">Small animal shavings (aspen or paper)</li>
                  <hr/>
                  <li className="menuSubtext">Puppy training pads</li>
                  <hr/>
                  <li className="menuSubtext">Cat litter (clay)</li>
                  <hr/>
                  <li className="menuSubtext">Cages (especially parrot or ferret cages)</li>
                  <hr/>
                  <li className="menuSubtext">Small animal water bottles</li>
                  <hr/>
                </ul>
              )
              : (
                null
              )
          }
        </div>

        <div className="wrapper">
          <button onClick={handleClick("hardware")}>
            Hardware
            &nbsp;
            <img src={DownArrow} alt="arrow" />
          </button>

          {
            this.state.section["hardware"]
              ? (
                <ul id="hardware">
                  <li className="menuSubtext">Plumbing fixtures</li>
                  <hr/>
                  <li className="menuSubtext">Yard & workshop tools</li>
                  <hr/>
                  <li className="menuSubtext">Chicken wire</li>
                  <hr/>
                  <li className="menuSubtext">Fencing materials</li>
                  <hr/>
                  <li className="menuSubtext">Gift cards for Lowe's or Home Depot</li>
                  <hr/>
                </ul>
              )
              : (
                null
              )
          }
        </div>

        <div className="wrapper">
          <button onClick={handleClick("other")}>
            Other Home Items
            &nbsp;
            <img src={DownArrow} alt="arrow" />
          </button>

          {
            this.state.section["other"]
              ? (
                <ul id="other">
                  <li className="menuSubtext">Metal stacking or folding chairs</li>
                  <hr/>
                  <li className="menuSubtext">Heating pads (non-auto shutoff)</li>
                  <hr/>
                  <li className="menuSubtext">Dog, parrot, or infant toys & stuffed animals</li>
                  <hr/>
                  <li className="menuSubtext">Health Care Supplies</li>
                  <hr/>
                  <li className="menuSubtext">Ceramic food bowls</li>
                  <hr/>
                  <li className="menuSubtext">Digital Gram Scales</li>
                  <hr/>
                </ul>
              )
              : (
                null
              )
          }
        </div>

        <div className="wrapper">
          <button onClick={handleClick("specialty")}>
            Specialty Equipment
            &nbsp;
            <img src={DownArrow} alt="arrow" />
          </button>

          {
            this.state.section["special"]
              ? (
                <ul id="special">
                  <li className="menuSubtext">Incubator</li>
                  <hr/>
                  <li className="menuSubtext">Portable X-ray Machine</li>
                  <hr/>
                  <li className="menuSubtext">Autoclave</li>
                  <hr/>
                </ul>
              )
              : (
                null
              )
          }
        </div>
      </div>
    )
  }
}
