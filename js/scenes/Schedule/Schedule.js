import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  FlatList,
  SectionList,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

import Moment from 'moment'

import { goToSession } from '../../lib/navigationHelpers'

import { styles } from './styles'

//TODO: this works in place of line 28
// <TouchableOpacity onPress={() => console.log("fml")}>


const Schedule = ({ data }) => {
  return (
    <View>
      <SectionList
        keyExtractor={(item) => (item.session_id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToSession('Schedule', { item } )}>
            <View>
              <Text style={styles.fontStyle}>{item.title}</Text>
              <Text>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={(item) => (
          <Text style={styles.fontHeader}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
        )}
        sections={data}
      />
    </View>
  );
}

Schedule.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default Schedule;