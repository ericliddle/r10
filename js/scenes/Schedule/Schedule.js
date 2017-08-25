import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import {
  Text,
  StyleSheet,
  FlatList,
  SectionList,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';


import { goToSession } from '../../lib/navigationHelpers'

import { styles } from './styles'

const Schedule = ({ data }) => (
  <View>
    <SectionList
      keyExtractor={(item, index) => (data.session_id)}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => goToSession('schedule', { item })}>
          <View>
            <Text style={styles.fontStyle}>{item.title}</Text>
            <Text>{item.location} </Text>
            <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} size={20} color='red' />
          </View>
        </TouchableOpacity>
      )}
      sections={data}
      renderSectionHeader={(item) => (
        <Text style={styles.fontHeader}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
      )}
    />
  </View>

)

Schedule.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default Schedule;