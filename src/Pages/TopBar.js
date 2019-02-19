import React, { Component } from 'react';
import './TopBar.css';

export default class TopBar extends Component {
  constructor() {
    super();

    this.state = {
      showAbout: false,
      showWays: false,
      showFound: false,
      showNews: false,
    }

    this.showAbout = this.showAbout.bind(this);
    this.showWays = this.showWays.bind(this);
    this.showFound = this.showFound.bind(this);
    this.showNews = this.showNews.bind(this);
  }

  showAbout(event) {
    event.preventDefault();

    this.setState({
      showAbout
    })
  }

  render() {
    return (
      <div>
        <div id="menu">
          <div>
            About Us
          </div>

          {
            this.state.showAbout
              ? (
                <div id="AboutUs">
                  <div>Our Mission</div>
                  <div>Education and Community Outreach</div>
                  <div>Hours & Location</div>
                  <div>Board Members & Staff</div>
                  <div>Contact Us</div>
                </div>
              )
              : (
                null
              )
          }

          <div>
            Ways to Give
          </div>

          {
            this.state.showWays
              ? (
                <div id="WaysToGive">
                  <div>Donate</div>
                  <div>Volunteer</div>
                  <div>Affiliate Programs</div>
                  <div>Holiday Giving</div>
                </div>
              )
              : (
                null
              )
          }

          <div>
            Found an Animal?
          </div>

          {
            this.state.showFound
              ? (
                <div id="FoundAnimal">
                  <div>*To Be Continued*</div>
                </div>
              )
              : (
                null
              )
          }

          <div>News & Events</div>

          {
            this.state.showNews
              ? (
                <div id="News">
                  <div>Blog</div>
                  <div>Events</div>
                  <div>Animals Stories</div>
                </div>
              )
              : (
                null
              )
          }

          <div>
            Store
          </div>
        </div>
      </div>
    )
  }
}
