import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import {
  Text,
  SectionList,
  TouchableOpacity,
  View
} from 'react-native';

import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles'

const Schedule = ({ data, singleSession }) => {
  return (
    <View>
      <SectionList
        renderSectionHeader={(item) => (
          <Text style={styles.schedHeader}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
        )}

        keyExtractor={(item) => (item.session_id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => singleSession(item)}>

            <View style={styles.scheduleContainer}>
              <Text style={styles.sessionTitle}>{item.title}</Text>
              <Text style={styles.sessionLocation}>{item.location} </Text>
              <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={20} color='red' />
            </View>
          </TouchableOpacity>
        )}
        sections={data}
      />
    </View>
  )
}

// Schedule.propTypes = {
//   balls: PropTypes.arrayOf(PropTypes.object).isRequired
// }


export default Schedule;
