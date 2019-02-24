import React, { Component } from 'react';
import './MenuBar.css';

export default class MenuBar extends Component {
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

    this.closeAbout = this.closeAbout.bind(this);
    this.closeWays = this.closeWays.bind(this);
    this.closeFound = this.closeFound.bind(this);
    this.closeNews = this.closeNews.bind(this);
  }

  showAbout(event) {
    event.preventDefault();

    this.setState({ showAbout: true }, () => {
      document.addEventListener('click', this.closeAbout);
    });
  }

  closeAbout(event) {
    if (!this.dropdownAbout.contains(event.target)) {
      this.setState({ showAbout: false }, () => {
        document.removeEventListener('click', this.closeAbout);
      });
    }
  }

  showWays(event) {
    event.preventDefault();

    this.setState({ showWays: true }, () => {
      document.addEventListener('click', this.closeWays);
    });
  }

  closeWays(event) {
    if (!this.dropdownWays.contains(event.target)) {
      this.setState({ showWays: false }, () => {
        document.removeEventListener('click', this.closeWays);
      });
    }
  }

  showFound(event) {
    event.preventDefault();

    this.setState({ showFound: true }, () => {
      document.addEventListener('click', this.closeFound);
    });
  }

  closeFound(event) {
    if (!this.dropdownFound.contains(event.target)) {
      this.setState({ showFound: false }, () => {
        document.removeEventListener('click', this.closeFound);
      });
    }
  }

  showNews(event) {
    event.preventDefault();

    this.setState({ showNews: true }, () => {
      document.addEventListener('click', this.closeNews);
    });
  }

  closeNews(event) {
    if (!this.dropdownNews.contains(event.target)) {
      this.setState({ showNews: false }, () => {
        document.removeEventListener('click', this.closeNews);
      });
    }
  }

  render() {
    return (
      <div id="menu">
        <div className="wrapper">
          <button onClick={this.showAbout}>
            About Us
        </button>

          {
            this.state.showAbout
              ? (
                <div
                  id="AboutUs"
                  ref={node => this.dropdownAbout = node}>
                  <button className="menuSubtext">Our Mission</button>
                  <button className="menuSubtext">Education and Community Outreach</button>
                  <button className="menuSubtext">Hours & Location</button>
                  <button className="menuSubtext">Board Members & Staff</button>
                  <button className="menuSubtext">Contact Us</button>
                </div>
              )
              : (
                null
              )
          }
        </div>

        <div className="wrapper">

          <button onClick={this.showWays}>
            Ways to Give
        </button>

          {
            this.state.showWays
              ? (
                <div
                  id="WaysToGive"
                  ref={(element) => {
                    this.dropdownWays = element;
                  }}>
                  <button className="menuSubtext">Donate</button>
                  <button className="menuSubtext">Volunteer</button>
                  <button className="menuSubtext">Affiliate Programs</button>
                  <button className="menuSubtext">Holiday Giving</button>
                </div>
              )
              : (
                null
              )
          }

        </div>

        <div className="wrapper">

          <button onClick={this.showFound}>
            Found an Animal?
        </button>

          {
            this.state.showFound
              ? (
                <div
                  id="FoundAnimal"
                  ref={(element) => {
                    this.dropdownFound = element;
                  }}>
                  <button className="menuSubtext">*To Be Continued*</button>
                </div>
              )
              : (
                null
              )
          }

        </div>

        <div className="wrapper">

          <button onClick={this.showNews}>
            News & Events
        </button>

          {
            this.state.showNews
              ? (
                <div
                  id="News"
                  ref={(element) => {
                    this.dropdownNews = element;
                  }}>
                  <button className="menuSubtext">Blog</button>
                  <button className="menuSubtext">Events</button>
                  <button className="menuSubtext">Animals Stories</button>
                </div>
              )
              : (
                null
              )
          }

        </div>

        <button>
          Store
        </button>
      </div>
    )
  }
}
