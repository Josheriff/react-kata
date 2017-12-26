import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../App/App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </header>
        <p className="App-intro">
            Ok, this is the header component Using the CSS from APP,.
            WHY NOT? (is this a new line???)
        </p>
      </div>
    );
  }
}

export default Header;
