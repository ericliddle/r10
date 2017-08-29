import React from 'react';
import { Platform } from 'react-native';
// import PropTypes from 'prop-types';
import {
  Text,
  Image,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Moment from 'moment';
import { goToSpeaker } from '../../lib/navigationHelpers';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const Sessions = ({ speakerData, sessionData }) => (
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.sessionHeader}>
        <Text style={styles.sessionLocation}>{sessionData.location}</Text>
        <Icon style={styles.heartIcon} name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} />
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
      <Button
        title="Remove from Faves"
        color="black"
        accessibilityLabel="Learn more about this purple button"
      />
      {/* TODO: Style button */}
    </View>
  </ScrollView>
)

Sessions.PropTypes = {

};

export default Sessions;