import React, { Component } from 'react';
import PropTypes from 'prop-types';


import '../App/App.css';

class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  render() {
    const { body } = this.props;

    return (
      <div className="Content">
          EL CONTENT CHAVAL!!
          {body}
      </div>
    );
  }
}

export default Content;
