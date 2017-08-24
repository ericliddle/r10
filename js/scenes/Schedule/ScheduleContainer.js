import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import Schedule from './Schedule';

import { getScheduleData } from '../../redux/modules/schedule';

class ScheduleContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getScheduleData());
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
        <Schedule data={this.props.data} />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.schedule.loading,
    data: state.schedule.data,
  }
}

export default connect(mapStateToProps)(ScheduleContainer);