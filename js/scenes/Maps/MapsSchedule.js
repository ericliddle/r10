import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Maps from './Maps';

class MapsContainer extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  static route = {
    navigationBar: {
      title: 'Maps',
    }
  }

  static propTypes = {
    
      };}

      export default MapsContainer;