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


// import { goToSession } from '../../lib/navigationHelpers'

// import { styles } from './styles'

const Schedule = ({ balls, singleSession }) => {
  return (
    <View>
      <SectionList
        keyExtractor={(item) => (item.session_id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => singleSession(item)}>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.location} </Text>
              {/* <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={20} color='red' /> */}
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={(item) => (
          <Text>{Moment.unix(item.section.title).format('h:mm A')}</Text>
        )}
        sections={balls}
      />
    </View>
  )
}

// Schedule.propTypes = {
//   balls: PropTypes.arrayOf(PropTypes.object).isRequired
// }


export default Schedule;
