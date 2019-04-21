import React from 'react';
import "./Template.css";
import Fawns1 from './fawns1.png';
import Fawns2 from './fawns2.png';
import Squirrel1 from './squirrel1.png';
import Squirrel2 from './squirrel2.png';
import Squirrel3 from './squirrel3.png';
import Bird1 from './bird1.png';
import Bird2 from './bird2.png';
import Bird3 from './bird3.png';
import Rabbit1 from './rabbit1.png';
import Rabbit2 from './rabbit2.png';
import Rabbit3 from './rabbit3.png';

class Template extends React.Component{
  state = {
    "fawns":{
      name : "Fawns",
      background : "We are often called upon to help what appears to be an orphaned fawn when in actuality; it’s not orphaned at all. Fawns are often left alone for several hours while the mother is looking for food.",
      helpInfo :
      "1. If a fawn is obviously ill, lying on its side, kicking, crying or is covered with fire ants, pick it up and place it in a box or animal carrier.\n\n A light cloth placed over the animal's head will sometimes calm it. Keep it away from pets and all human activity. Call Friends of Texas Wildlife at once for help.\n\n 2. If an uninjured fawn is seen, leave it alone and leave the area. The fawn would not be there if the doe were not nearby. You will not see her. She will return for the fawn only when there are no humans nearby. If you have removed the fawn from its resting spot, TAKE IT BACK AT ONCE and walk away. The doe will be searching for her fawn and will accept it even with a human scent on it.",
      caution :
      "This is a wild animal. Human voices, odor and touch only add to the stress and will cause additional harm. \n\nDo not try to make a wild animal your pet. Not only is it not fair to the animal, it is against the law. According to Chapter 63, Section 63.002 of the Parks and Wildlife Code no person can possess a live game animal for any purpose not authorized by their code. The first offense for illegal possession of a live deer is a Class C misdemeanor punishable by a fine of up to $500 plus court costs. There are similar laws for possession of other animals such as raccoons. ",
      image:
      [Fawns1, Fawns2]
    },

    "squirrels": {
      name : "Baby Squirrels",
      background : "In our part of Texas baby squirrels are born twice a year; once in the early spring (as early as January) and again in the fall (August until as late as December.) Female squirrels will often build multiple nests so if one nest is destroyed or becomes infested with pests, they can move their babies to another nest.",
      helpInfo :
      "If you find babies on the gronud or a nest has been destroyed:\n\n1. place the babies in a shoebox or other similar container (not too deep) with an old t-shirt or other ravel-free fabric. \n\n2. Use a rice sock or hot water bottle (not too hot) placed under the fabric to keep the babies warm. \n\n3. Place the box as close to where you found the babies as possible (if cats or dogs are around, you can even nail the box to a tree). Avoid direct sunlight.\n\n 4. Give the mother squirrel at least two or three hours (weather and daylight permitting) to return for her babies. Observe from a distance to see if the mother comes back. \n\nIf she does not return, or if weather is very cold, inclement, or it is already dark, call a wildlife rehabilitator for assistance.",
      caution :
      "This is a wild animal. Human voices, odor and touch only add to the stress and will cause additional harm. \n\nDo not try to make a wild animal your pet. Not only is it not fair to the animal, it is against the law. According to Chapter 63, Section 63.002 of the Parks and Wildlife Code no person can possess a live game animal for any purpose not authorized by their code. The first offense for illegal possession of a live deer is a Class C misdemeanor punishable by a fine of up to $500 plus court costs. There are similar laws for possession of other animals such as raccoons.",
      image:
      [Squirrel1, Squirrel2, Squirrel3]
    },

    "birds": {
      name : "Baby Birds",
      background: "Every year, thousands of baby birds are needlessly \"kidnapped\" from their parents by well-meaning people who think they are rescuing them. Many of these babies are fledglings; this means they are too big for the nest, but cannot yet fly. These birds are feathered, have a little stubby tail, and they hop from branch to branch with the parents still feeding them. THESE BABIES ARE FINE AND SHOULD BE LEFT ALONE!!",
      helpInfo:
      "If you find babies on the gronud or a nest has been destroyed:\n\n1. place the babies in a shoebox or other similar container (not too deep) with an old t-shirt or other ravel-free fabric.\n\n 2. Use a rice sock or hot water bottle (not too hot) placed under the fabric to keep the babies warm.\n\n3. Place the box as close to where you found the babies as possible (if cats or dogs are around, you can even nail the box to a tree). Avoid direct sunlight.\n\n 4. Give the mother squirrel at least two or three hours (weather and daylight permitting) to return for her babies. Observe from a distance to see if the mother comes back. \n\nIf she does not return, or if weather is very cold, inclement, or it is already dark, call a wildlife rehabilitator for assistance.",
      caution :
      "This is a wild animal. Human voices, odor and touch only add to the stress and will cause additional harm. \n\nDo not try to make a wild animal your pet. Not only is it not fair to the animal, it is against the law. According to Chapter 63, Section 63.002 of the Parks and Wildlife Code no person can possess a live game animal for any purpose not authorized by their code. The first offense for illegal possession of a live deer is a Class C misdemeanor punishable by a fine of up to $500 plus court costs. There are similar laws for possession of other animals such as raccoons.",
      image:
      [Bird1, Bird2, Bird3]
    },

    "rabbits": {
      name: "Baby Bunny",
      background: "People often find baby rabbits alone in a nest and assume they have been abandoned. Natural behavior for wild rabbits is for the mom to bed her babies down in a nest, but not stay with them. The babies do not have any scent, and mom stays away in order to keep predators from finding the nest. She returns twice a day (usually early morning and evening) to quickly check on her babies and nurse them, and may spend as little as ten minutes a day tending her young.\n\nOnce baby rabbits are about the size of a tennis ball, they are independent of their mom and should be left alone.",
      helpInfo:
      "1. If the baby rabbits seem warm and have full tummies, they are most likely being fed by mom. To check for mom's return, you can either cross some sticks over the babies, or place some flour around the nest. Check back later to see if the sticks have moved, or if there are footprints in the flour (both are proof mom came back). If after at least 12 hours there is still no sign of mom, then please call a rehabber for help.\n\n2. If your dog finds a nest, the nest can be moved up to 12 feet (if it is possible to reposition the nest outside of a fence line, etc.) and mom will generally still find her babies. Rabbits are very difficult to rehabilitate due to their unique digestive needs, so it is always best to give mom a chance to do her job if that is possible.\n\n 3. If you have determined that the babies are truly abandoned, or if they have been cat-caught, keep the babies WARM (not too hot as this will kill them) and rehydrate with warm Pedialyte or Gatorade (do NOT give any milk or formula as the incorrect kind will also kill the babies) and contact a wildlife rehabilitator for assistance.",
      caution:
      "This is a wild animal. Human voices, odor and touch only add to the stress and will cause additional harm. \n\nDo not try to make a wild animal your pet. Not only is it not fair to the animal, it is against the law. According to Chapter 63, Section 63.002 of the Parks and Wildlife Code no person can possess a live game animal for any purpose not authorized by their code. The first offense for illegal possession of a live deer is a Class C misdemeanor punishable by a fine of up to $500 plus court costs. There are similar laws for possession of other animals such as raccoons.",
      image:
      [Rabbit1, Rabbit2, Rabbit3]
    }

  };

  render() {
    return (
    <div id = "templateContainer">
    <p id = "title">{this.state[this.props.match.params.id].name}</p>
    <div id = "background">
      <h2 class = "subtitle">Background</h2>
      <p>{this.state[this.props.match.params.id].background}</p>
    </div>
    <div id = "content">
      <div id = "textarea">
        <div class = "info">
          <h2 class = "subtitle">How to help</h2>
          <p style={{"white-space": "pre-line"}}>{this.state[this.props.match.params.id].helpInfo}</p>
        </div>
        <div class = "info">
          <h2 class = "subtitle">Don't pet, feed, talk to or hold {this.props.match.params.id}</h2>
          <p style={{"white-space": "pre-line"}}>{this.state[this.props.match.params.id].caution}</p>
        </div>
        <div id = "callUs">
          <p id = "callUsText">CALL US</p>
          <p id = "number">281-259-0039</p>
        </div>
      </div>
      <div id = "images">
        {this.state[this.props.match.params.id].image.map((pic, i) =>
          <img class = "image" key={i} src = {pic}/>)}
      </div>
    </div>
    </div>

    )
  }
}

export default Template;
