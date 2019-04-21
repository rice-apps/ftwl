import React from 'react';
import "./Template.css";
import FawnsPic from './fawns.png';

class Template extends React.Component{
  state = {
    "fawns":{
      name : "Fawns",
      background : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      helpInfo :
      "1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      caution :
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image:
      FawnsPic
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
          <h2 class = "subtitle">Decide if {this.props.match.params.id} need help</h2>
          <p>{this.state[this.props.match.params.id].helpInfo}</p>
        </div>
        <div class = "info">
          <h2 class = "subtitle">Don't pet, feed, talk to or hold {this.props.match.params.id}</h2>
          <p>{this.state[this.props.match.params.id].caution}</p>
        </div>
        <div id = "callUs">
          <p id = "callUsText">CALL US</p>
          <p id = "number">281-259-0039</p>
        </div>
      </div>
      <div id = "images">
        <img class = "image" src = "https://s3-alpha-sig.figma.com/img/1d03/008f/dda7faef7a7d542ea4cf05f11df7189b?Expires=1555286400&Signature=MG7DczUR0w0Ep~BgF6VnpAe9rfZJ2DAfoTOsGasR0nnRbLoL8-kP29pakD8wVxq3b1kLK34B76MTKtn0oO66m59vyDLf-bwa92I1z-DgFy8FGE3BeSffFCFPI1x2CgNVstYhgPaSen7qHngOMmwFg-CuMkXDtnC5buEn~-X9zbU9twPWJyxG-0AmVeP6ppfBajCoju9HWuG8aTjOnof532fRVMbnvRtx-WjMRTxnoH91eXokvqoO3HrfJkOtCih9aspSKPzEI3nM6kSFGzaRvh4QWXuHAQ1sKhSWPglvdtpO1wY76c4eoN6qxh6vrjhbRqljaTmAnvqT4WhKyujBfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
        <img class = "image" src = {this.state[this.props.match.params.id].image}/>
      </div>
    </div>
    </div>

    )
  }
}

export default Template;
