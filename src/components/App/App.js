import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';


// Importing components

import Header from '../Header/Header';
import Footer from '../Footer/Footer'

class App extends Component {
  render() {
    return (
        <div className="App">
                <Header/>
                <Footer/>
      </div>
    );
  }
}

export default App;
