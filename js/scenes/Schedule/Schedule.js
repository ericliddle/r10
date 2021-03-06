import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  SectionList,
  TouchableOpacity,
  View,
  Platform
} from 'react-native';



import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
import { colors, typography } from '../../config/styles';

const Schedule = ({ data, singleSession, fave_id }) => {

  return (
    <View style={styles.container}>
      <SectionList
        renderSectionHeader={(item) => (
          <Text style={styles.schedHeader}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
        )}

        keyExtractor={(item) => (item.session_id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => singleSession(item)} style={styles.border}>

            <Text style={styles.sessionTitle}>{item.title}</Text>
            <View style={styles.scheduleContainer}>
              <Text style={styles.sessionLocation}>{item.location}</Text>
              {(fave_id.find(fave => fave.id === item.session_id)) ? <Icon style={styles.heartIcon} name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} /> : null}
            </View>

          </TouchableOpacity>
        )}
        sections={data}
      />
    </View>
  )
}

export default Schedule;
