import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ActivityIndicator } from 'react-native';

import { getFaveData } from '../../redux/modules/faves';
import Faves from './Faves';

class FavesContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getFaveData(this.props.faveData))
  }

  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  render() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    } else {
      return <Faves
        favesData={this.props.faveData}
      />
    }
  }

  static propTypes = {

  };
}

function mapStateToProps(state) {
  return {
    favesData: state.favesData,
  }
}

export default connect(mapStateToProps)(FavesContainer);