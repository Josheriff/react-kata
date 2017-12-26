import React, { Component } from 'react';
import logo from '../images/footer.jpeg';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
          <h2>Bye bye React</h2>
          <img src={logo} ClassName="bot-image"  alt="foot massage" />

          <p className="App-Goodbye">
            Now we are importing the footer component and saying bye bye
          </p>
      </div>
    );
  }
}

export default Footer;
