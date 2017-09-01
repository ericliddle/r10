import React from 'react';
// import PropTypes from 'prop-types';
import {
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native';
import Moment from 'moment';
import { goToSpeaker } from '../../lib/navigationHelpers';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

import ActionButton from '../../components/ActionButton';
// import HeartIcon from '../../components/HeartIcon'


const Sessions = ({ faveId, speakerData, sessionData, createFave, deleteFave }) => {

  const matchingId = faveId.find(item => item.id === sessionData.session_id)

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.sessionHeader}>
          <Text style={styles.sessionLocation}>{sessionData.location}</Text>
          {(matchingId) ? <Icon style={styles.heartIcon} name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} /> : null}
        </View>
        <Text style={styles.sessionTitle}>{sessionData.title}</Text>
        <Text style={styles.timeSlot}>{Moment.unix(sessionData.start_time).format('h:mm A')}</Text>
        <Text style={styles.sessionInfo}>{sessionData.description}</Text>
        <Text style={styles.presenter}>Presented By:</Text>
        <TouchableOpacity
          style={styles.speakerContainer}
          onPress={() => goToSpeaker(speakerData)}>
          <Image
            style={styles.speakerImage}
            source={{ uri: speakerData.image }}
          />
          <Text>{speakerData.name}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <ActionButton
          buttonAction={(matchingId) ? () => deleteFave() : () => createFave()}
          text={(matchingId) ? 'Remove from Faves' : 'Add to Faves'}
        />
      </View>
    </ScrollView>
  )
};

Sessions.PropTypes = {

};

export default Sessions;