import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { Sessions } from './Sessions';

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
    if (this.state.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return <Sessions />
    }
  }
}

export default SessionsContainer;