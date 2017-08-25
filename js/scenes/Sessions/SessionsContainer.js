import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import Sessions from './Sessions';

import { getSession } from '../../redux/modules/session';


class SessionsContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getSession());
  }

  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  static route = {
    navigationBar: {
      title: 'Sessions',
    }
  }

  render() {
    return <Sessions />
  }
}


export default SessionsContainer;