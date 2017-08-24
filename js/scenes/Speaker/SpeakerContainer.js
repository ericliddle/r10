import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Speaker from './Speaker';

class SpeakerContainer extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  static route = {
    navigationBar: {
      title: 'Speaker',
    }
  }

  static propTypes = {
    
      };}

      export default SpeakerContainer;