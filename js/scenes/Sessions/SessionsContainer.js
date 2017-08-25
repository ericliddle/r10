import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { creatRouter } from '@expo/ex-navigation';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import Sessions from './Sessions';

import { getSession } from '../../redux/modules/session';


class SessionsContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getSession(this.props.getSession.speaker));
  }

  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  render() {
    return <Sessions

      data={this.props.data}
    />
  }
}

function mapStateToProps(state) {
  return {
    data: state.schedule.sessionData,
  }
}

export default SessionsContainer;