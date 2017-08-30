import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator } from 'react-native';

import Faves from './Faves';

class FavesContainer extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  render() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    } else {
      return <Faves />
    }
  }

  static propTypes = {

  };
}

export default FavesContainer;