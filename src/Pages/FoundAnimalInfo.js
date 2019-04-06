import React, { Component } from 'react';
import './FoundAnimalInfo.css';

export default class FoundAnimalInfo extends Component {
    render() {
        return(
          <div className="FAInfoWrapper">
            <div className="FAInfoHeader">Found an animal?</div>
            <div className="FAInfosubHeader">Don't worry! We can help.</div>
            <div className="AnimalOptionsWrapper">
              <div className="AnimalOption"><h1>Rabbits</h1></div>
              <div className="AnimalOption"><h1>Birds</h1></div>
              <div className="AnimalOption"><h1>Squirrels</h1></div>
              <div className="AnimalOption"><h1>Fawns</h1></div>
            </div>
            <div className="FAInfoHeader">General Information</div>
            <div className="CallingInfoWrapper"></div>
            <div className="AnimalStepsInfoWrapper"></div>
            <div className="FAInfoHeader">Frequently Asked Questions</div>
            <div className="FAQWrapper"></div>
          </div>
        )

  }

}
