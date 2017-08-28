import React from 'react';
// import PropTypes from 'prop-types';
import {
  Text,
  Image,
  View
} from 'react-native';
import { goToSpeaker } from '../../lib/navigationHelpers';

// import { styles } from './styles'

const Sessions = ({scheduleData, speakerData}) => (
  <View>
    {/* <Text>{scheduleData.location}</Text> */}
    <Image
    style={{ width: 50, height: 50, borderRadius: 25}}
    source={{uri: speakerData.image}}
  />

    <Text>{scheduleData.description}</Text>
    <Text>{speakerData.name}</Text>
  </View >
)

Sessions.PropTypes = {

};

export default Sessions;