import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Sessions from './Sessions';

class SessionsContainer extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  static route = {
    navigationBar: {
      title: 'Sessions',
    }
  }

  render() {
    return (
      <Sessions />
    )
  }
}

export default SessionsContainer;