import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import Sessions from './Sessions';

import { ActivityIndicator } from 'react-native';

import { getSessionData } from '../../redux/modules/session';

import {
  getFaveData,
  createFaveItem,
  deleteFaveItem
} from '../../redux/modules/faves';

import { getFaveId } from '../../redux/modules/faves';


class SessionsContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getSessionData(this.props.sessionData.speaker));
    this.props.dispatch(getFaveId());
    

  }

  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  createFave() {
    this.props.dispatch(createFaveItem(this.props.sessionData.session_id))
  }

  deleteFave() {
    this.props.dispatch(deleteFaveItem(this.props.sessionData.session_id))
  }

  render() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    } else {
      return <Sessions
        speakerData={this.props.speakerData}
        sessionData={this.props.sessionData}
        createFave={() => this.createFave()}
        deleteFave={() => this.deleteFave()}
        faveId={this.props.faveId}
      />
    }
  }
}

function mapStateToProps(state) {
  return {
    speakerData: state.session.sessionData,
    faveId: state.faves.fave_id,
  }
}

export default connect(mapStateToProps)(SessionsContainer);
