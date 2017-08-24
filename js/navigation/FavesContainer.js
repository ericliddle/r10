import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
   return <Faves />
 }

  static propTypes = {
    
      };}

      export default FavesContainer;