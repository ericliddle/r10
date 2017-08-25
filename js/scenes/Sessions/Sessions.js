import React from 'react';
// import PropTypes from 'prop-types';
import {
  Text,
  View
} from 'react-native';
import { goToSpeaker } from '../../lib/navigationHelpers';

// import { styles } from './styles'

const Sessions = ({data}) => (
  <View >
    <Text>{data.location}</Text>
  </View >
)

Sessions.PropTypes = {

};

export default Sessions;