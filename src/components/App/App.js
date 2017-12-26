import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';


// Importing components

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Importing Dummy Data

import dummy from '../../dummyData/data.js'

class App extends Component {
  render() {
    return (
        <div className="App">
                <Header title="testing" dummy={dummy}/>
                <Footer/>
      </div>
    );
  }
}

export default App;
