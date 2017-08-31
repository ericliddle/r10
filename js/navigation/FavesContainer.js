import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import realm from '../config/models';
import { getFaveData } from '../redux/modules/faves';
import Faves from './Faves';

class FavesContainer extends Component {


  componentDidMount() {
    this.props.dispatch(getFaveData());
    realm.addListener('change', () => this.props.dispatch(getFaveData()));

  }
  // constructor() {
  //   super();
  //   this.state = {
  //     data: [],
  //     isLoading: true,
  //   };
  // }

  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  render() {
    return <Faves />
  }

  static propTypes = {

  };
}

export default connect()(FavesContainer);