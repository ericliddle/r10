import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  View
} from 'react-native';

import { styles } from './styles'

const Speaker = (speakerData) => (
  <ScrollView>
    <View style={styles.container}>
      {/* <Text>{JSON.stringify(speakerData)}</Text> */}
      <Image
    style={styles.speakerImage}
    source={{uri: speakerData.speakerData.image}}
  />
      <Text style={styles.speakerName}>{speakerData.speakerData.name}</Text>
      <Text>{speakerData.speakerData.bio}</Text>
    </View >
  </ScrollView>
);


Speaker.PropTypes = {

};

export default Speaker;