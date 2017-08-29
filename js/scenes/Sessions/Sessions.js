import React from 'react';
import { Platform } from 'react-native';
// import PropTypes from 'prop-types';
import {
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import Moment from 'moment';
import { goToSpeaker } from '../../lib/navigationHelpers';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import {colors, typography} from '../../config/styles';

const Sessions = ({speakerData, sessionData}) => (
  <View>
    <Text>{sessionData.location}</Text>
    <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={20} color='red' />
    <Text>{sessionData.title}</Text>
    <Text>{Moment.unix(sessionData.start_time).format('h:mm A')}</Text>
    <Text>{sessionData.description}</Text>
    <Text>Presented By:</Text>
    <TouchableOpacity onPress={() => goToSpeaker(speakerData)}>
    <Image
    style={{ width: 50, height: 50, borderRadius: 25}}
    source={{uri: speakerData.image}}
  />
    <Text>{speakerData.name}</Text>
    </TouchableOpacity>
  </View >
)

Sessions.PropTypes = {

};

export default Sessions;