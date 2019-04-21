import React, { Component } from 'react';
import './MenuBar.css';
import DownArrow from '../Images/DownArrow.svg';
import Logo from '../Images/Logo.svg';

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
        <div id="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div id="secondwrapper">
          <div className="wrapper">
            <button onClick={this.showAbout}>
              About Us
              &nbsp;
            <img src={DownArrow} alt="arrow" />
            </button>

            {
              this.state.showAbout
                ? (
                  <ul
                    id="AboutUs"
                    ref={(element) => {
                      this.dropdownAbout = element;
                    }}>
                    <li className="menuSubtext">Our Mission</li>
                    <hr />
                    <li className="menuSubtext">Education and Community Outreach</li>
                    <hr />
                    <li className="menuSubtext">Hours & Location</li>
                    <hr />
                    <li className="menuSubtext">Board Members & Staff</li>
                    <hr />
                    <li className="menuSubtext">Contact Us</li>
                  </ul>
                )
                : (
                  null
                )
            }
          </div>

          <div className="wrapper">

            <button onClick={this.showWays}>
              Ways to Give
              &nbsp;
            <img src={DownArrow} alt="arrow" />
            </button>

            {
              this.state.showWays
                ? (
                  <ul
                    id="WaysToGive"
                    ref={(element) => {
                      this.dropdownWays = element;
                    }}>
                    <li className="menuSubtext">Donate</li>
                    <hr />
                    <li className="menuSubtext">Volunteer</li>
                    <hr />
                    <li className="menuSubtext">How You Can Help</li>
                  </ul>
                )
                : (
                  null
                )
            }

          </div>

          <div className="wrapper">

            <button onClick={this.showFound}>
              Found an Animal?
              &nbsp;
            <img src={DownArrow} alt="arrow" />
            </button>

            {
              this.state.showFound
                ? (
                  <ul
                    id="FoundAnimal"
                    ref={(element) => {
                      this.dropdownFound = element;
                    }}>
                    <li className="menuSubtext">Fawns</li>
                    <hr />
                    <li className="menuSubtext">Squirrels</li>
                    <hr />
                    <li className="menuSubtext">Birds</li>
                  </ul>
                )
                : (
                  null
                )
            }

          </div>

          <div className="wrapper">

            <button onClick={this.showNews}>
              News & Events
              &nbsp;
            <img src={DownArrow} alt="arrow" />
            </button>

            {
              this.state.showNews
                ? (
                  <ul
                    id="News"
                    ref={(element) => {
                      this.dropdownNews = element;
                    }}>
                    <li className="menuSubtext">Blog</li>
                    <hr />
                    <li className="menuSubtext">Events</li>
                    <hr />
                    <li className="menuSubtext">Animals Stories</li>
                  </ul>
                )
                : (
                  null
                )
            }

          </div>

          <div>
            <button>
              Store
          </button>
          </div>
        </div>
        <div>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_donations" />
            <input type="hidden" name="business" value="7B42V8JE9E4YN" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
      </div>
    )
  }
}
