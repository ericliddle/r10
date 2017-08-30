import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Button,
  View,
  TouchableOpacity,
  Platform,
  Linking
} from 'react-native';

import { styles } from './styles'
import Icon from 'react-native-vector-icons/Ionicons';


const Speaker = (speakerData) => (
  <ScrollView backgroundColor='black'>
    <View>
      <TouchableOpacity>
        <Icon name='ios-close' size={36} color='white' />
        <Text color='white'>About the Speaker</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
      <Image
        style={styles.speakerImage}
        source={{ uri: speakerData.speakerData.image }}
      />
      <Text style={styles.speakerName}>{speakerData.speakerData.name}</Text>
      <Text style={styles.speakerBio}>{speakerData.speakerData.bio}</Text>

      <View>
        <Button title='Read More on Wikipedia'
          onPress={() => Linking.openURL(speakerData.speakerData.url).catch(err => ('An error occurred', err))}
        />
      </View >
    </View>
  </ScrollView>
);


Speaker.PropTypes = {

};

export default Speaker;