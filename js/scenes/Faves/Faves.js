import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  FlatList,
  Image,
  View,
  SectionList,
  TouchableOpacity,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


import Moment from 'moment';

import { styles } from './styles';

const Faves = ({ fave_data, singleSession }) => (
  <View>
    <SectionList
    renderSectionHeader={(item) => (
      <Text style={styles.schedHeader}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
    )}

    keyExtractor={(item) => (item.session_id)}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => singleSession(item)}>

        <Text style={styles.sessionTitle}>{item.title}</Text>
        <View style={styles.scheduleContainer}>
          <Text style={styles.sessionLocation}>{item.location} </Text>
          <Icon name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'} style={styles.schedHeart} />
        </View>
      </TouchableOpacity>
    )}
    sections={fave_data}
  />
</View>
)

export default Faves;