import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import realm from '../../config/models';
import { getFaveData } from '../../redux/modules/faves';
import { goToSession } from '../../lib/navigationHelpers'

import Faves from './Faves';

class FavesContainer extends Component {


  componentDidMount() {
    this.props.dispatch(getFaveData());
    realm.addListener('change', () => this.props.dispatch(getFaveData()));
  }

  singleSession(item) {
    goToSession('faves', item);
  }

  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  render() {
    return (
      <Faves 
      fave_data={this.props.fave_data} 
      singleSession={this.singleSession}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    fave_data: state.faves.fave_data
  }
}

export default connect(mapStateToProps)(FavesContainer);