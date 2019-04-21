import React, { Component } from 'react';
import './FoundAnimalInfo.css';

export default class FoundAnimalInfo extends Component {
    render() {
        return(
          <div className="FAInfoWrapper">
            <div className="Title">Found an animal?</div>
            <div className="FAInfosubHeader">Don't worry! We can help.</div>
            <div className="AnimalOptionsWrapper">
              <div className="AnimalOption"><h1>Rabbits</h1></div>
              <div className="AnimalOption"><h1>Birds</h1></div>
              <div className="AnimalOption"><h1>Squirrels</h1></div>
              <div className="AnimalOption"><h1>Fawns</h1></div>
            </div>
            <div className="Title">General Information</div>
            <div className="CallingInfoWrapper">
              <div className="CallingInfo">
                <h3>INJURED ADULT DEER</h3>
                <h1>513-389-4848</h1>
              </div>
              <div className="CallingInfo">
                <h3>ALL OTHER ANIMALS</h3>
                <h1>281-259-0039</h1>
              </div>
            </div>
            <div className="AnimalStepsInfoWrapper">
              <div className="StepItemWrapper">
                <div className="StepIndex">1.</div>
                <div className="StepTextWrapper">
                  <h1>PREPARE A CONTAINER</h1>
                  <p>Place a soft cloth or paper towels on the bottom of a cardboard box with a lid or a kennel carrier. If it doesn’t have air holes, make some.</p>
                </div>
              </div>
              <div className="StepItemWrapper">
                <div className="StepIndex">2.</div>
                <div className="StepTextWrapper">
                  <h1>PROTECT YOURSELF</h1>
                  <p>Wear thick gloves if possible but remember a scared animal can easily bite through a leather glove.</p>
                </div>
              </div>
              <div className="StepItemWrapper">
                <div className="StepIndex">3.</div>
                <div className="StepTextWrapper">
                  <h1>COVER THE ANIMAL</h1>
                  <p>Use a light sheet or towel. Gently pick the animal up, if it is small, and place it in the prepared container. Larger animals or adults can be scooted into the container with a broom.</p>
                </div>
              </div>
              <div className="StepItemWrapper">
                <div className="StepIndex">4.</div>
                <div className="StepTextWrapper">
                  <h1>WARM THE ANIMAL</h1>
                  <p> If it is cold or if it is a baby animal. Put one end of thE container on a heating pad set on low or heat a damp washcloth in an unsealed ziplock bag in the microwave for 30-40 seconds. Seal the bag and place it under the container. </p>
                </div>
              </div>
              <div className="StepItemWrapper">
                <div className="StepIndex">5.</div>
                <div className="StepTextWrapper">
                  <h1>KEEP THE ANIMAL</h1>
                  <p>In a warm, dark, and quiet place. Leave it alone, don’t handle it. Keep children and pets away. </p>
                </div>
              </div>
              <div className="StepItemWrapper">
                <div className="StepIndex">6.</div>
                <div className="StepTextWrapper">
                  <h1>DON'T FEED THE ANIMAL</h1>
                  <p>Water can easily go “down the wrong way” into the lungs and kill it. Feeding mammals, especially babies, is the wrong thing to do and can injure or kill the animal.</p>
                </div>
              </div>
            </div>
            <div className="Title">Frequently Asked Questions</div>
            <div className="FAQWrapper">
              <div className="FAQItem">
                <div className="FAQCategory">NUISANCE WILDLIFE</div>
                <div className="FAQTextWrapper">
                  <div className="FAQTitle">I FOUND AN ANIMAL. WHO SHOULD I CALL?</div>
                  <p>For injured deer, call Game Warden Dispatch at 512-389-4848.<br/>All other injured or orphaned wildlife, call 281-259-0039.</p>
                </div>
              </div>
              <div className="FAQItem">
                <div className="FAQCategory">NOISES IN YOUR ATTIC</div>
                <div className="FAQTextWrapper">
                  <div className="FAQTitle">I FOUND AN ANIMAL. WHO SHOULD I CALL?</div>
                  <p>PREDATOR SMELL.  Place a stinky dog blanket (the smellier the better) near or as close to the area of animal activity in your attic. Purchase fox urine at sporting goods stores, saturate some tennis balls with it and toss in the attic.</p>
                  <p>MAKE A LOT OF NOISE.  Periodically, over a 3 day period, go into the attic and make a lot of noise. Blow whistles, honk air horns, and clang pots and pans. You can also attach a box or cans to a cord, toss it into the attic, and drag it across the rafters.  Make the noise during the sleep period of the animal (raccoons sleep during the day; squirrels at night).</p>
                  <p>LIGHTS.  Keep bright lights on in the attic or run trouble-lights 24 hours a day for the 3-day period.</p>
                </div>
              </div>
              <div className="FAQItem">
                <div className="FAQCategory">BRINGING ANIMALS TO THE INTAKE CENTER</div>
                <div className="FAQTextWrapper">
                  <div className="FAQTitle">I FOUND AN ANIMAL. WHO SHOULD I CALL?</div>
                  <p>For injured deer, call Game Warden Dispatch at 512-389-4848.<br/>All other injured or orphaned wildlife, call 281-259-0039.</p>
                </div>
              </div>
            </div>
          </div>
        )

  }

}
