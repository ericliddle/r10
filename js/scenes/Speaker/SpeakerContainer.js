import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Speaker from './Speaker';
import { ActivityIndicator } from 'react-native';


class SpeakerContainer extends Component {

  static route = {
    navigationBar: {
      title: 'About the Speaker',
      visible: false,
    }
  }

  static propTypes = {

  };


  render() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    } else {
      return (
        <Speaker
          speakerData={this.props.speakerData} />
      )
    }
  }
}

export default SpeakerContainer;