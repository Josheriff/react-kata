import React, { Component } from 'react';
import PropTypes from 'prop-types'; // Accesing another component data

import logo from '../images/logo.svg';
import '../App/App.css';

class Header extends Component {
    // data before render, make sense!
    static PropTypes = {
        title: PropTypes.string.isRequired,
        dummy: PropTypes.array.isRequired
    }
    render() {
        console.log(this.props,'OEOEOEOEOEOEOE')
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
