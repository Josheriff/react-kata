import React, { Component } from 'react';
import PropTypes from 'prop-types'; // Accesing another component data

import logo from '../images/logo.svg';
import '../App/App.css';

class Header extends Component {
    // data before render, make sense!
    static propTypes = {
        title: PropTypes.string.isRequired,
        dummy: PropTypes.array.isRequired
    }
    render() {
        console.log(this.props,'OEOEOEOEOEOEOE')
        const {title, dummy} = this.props
     /*         ^^^^   ^^^      ^^^^
         JUST SINTACTIC SUGAR OF THIS LINES:

        const title = {title: this.props.title}
        const dummy = {dummy: this.props.dummy}

             */
        console.log(dummy)
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {title} </h2>
        </header>
        <p className="App-intro">
            Ok, this is the header component Using the CSS from APP,.
            WHY NOT? (is this a new line???)
        </p>
        <ul>
            {dummy.map((item,key)=><li key={key}>{item.title}key:{key}</li>)}
        </ul>
      </div>
    );
  }
}

export default Header;
