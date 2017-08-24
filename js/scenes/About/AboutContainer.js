import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';

import About from './About';

import { getConductData } from '../../redux/modules/conduct';

class AboutContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getConductData());
  }

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  render() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      )
    } else {
      return (
        <About data={this.props.data} />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.conduct.loading,
    data: state.conduct.data,
  }
}

export default connect(mapStateToProps)(AboutContainer);