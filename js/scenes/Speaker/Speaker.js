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
    <View >
      {/* <Text>{JSON.stringify(speakerData)}</Text> */}
      <Image
    style={{ width: 100, height: 100, borderRadius: 50}}
    source={{uri: speakerData.speakerData.image}}
  />
      <Text>{speakerData.speakerData.name}</Text>
      <Text>{speakerData.speakerData.bio}</Text>
    </View >
  </ScrollView>
);


Speaker.PropTypes = {

};

export default Speaker;