import React, { Component } from 'react';
import './App.css';


// Importing components

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BodyContent from '../BodyContent/bodyContent'

// Importing Dummy Data

import dummy from '../../dummyData/data.js'

class App extends Component {
  render() {
    return (
        <div className="App">
                <Header title="testing" dummy={dummy}/>
                <Footer/>
                <BodyContent/>
      </div>
    );
  }
}

export default App;
