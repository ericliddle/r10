import React from 'react';

import {
  Icon,
  Platform
} from 'react-native'

import {styles} from '../../scenes/Sessions/styles'

const HeartIcon = ({ heartIcon }) => {
  return (
    <Icon style={styles.heartIcon} name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} />
  )
};

export default HeartIcon;