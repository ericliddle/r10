import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import Schedule from './Schedule';

import { getFaveId } from '../../redux/modules/faves'

import { getScheduleData } from '../../redux/modules/schedule';
import { goToSession } from '../../lib/navigationHelpers'

class ScheduleContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getScheduleData());
    this.props.dispatch(getFaveId());
  }

  singleSession(item) {
    goToSession('schedule', item);
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  render() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    } else {
      return (
        <Schedule
          data={this.props.scheduleData}
          singleSession={this.singleSession}
          fave_id={this.props.fave_id}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.schedule.loading,
    scheduleData: state.schedule.scheduleData,
    fave_id: state.faves.fave_id
  }
}

export default connect(mapStateToProps)(ScheduleContainer);