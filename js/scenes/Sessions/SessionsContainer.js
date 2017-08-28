import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { createRouter, NavigationProvider, StackNavigation } from '@expo/ex-navigation';
// import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import Sessions from './Sessions';

import { getSessionData } from '../../redux/modules/session';


class SessionsContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getSessionData(this.props.sessionData.speaker));
  }

  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  render() {
    return <Sessions
      scheduleData={this.props.scheduleData}
      speakerData={this.props.sessionData}

    />
  }
}

function mapStateToProps(state) {
  return {
    sessionData: state.session.sessionData,
  }
}

export default connect(mapStateToProps)(SessionsContainer);
// export default (SessionsContainer);