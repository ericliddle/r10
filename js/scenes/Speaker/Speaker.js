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
import {goBack} from '../../lib/navigationHelpers'
import { styles } from './styles'
import { buttonStyles } from '../../components/ActionButton';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from '../../components/ActionButton';


const Speaker = (speakerData) => (
  <ScrollView backgroundColor='black'>
    <View style={styles.speakerHeader}>
      <TouchableOpacity onPress={() => goBack()} style={styles.closeX}>
        <Icon name='ios-close' size={36} color='white' />
      </TouchableOpacity>
        <Text style={styles.aboutSpeaker}>About the Speaker</Text>
    </View>
    <View style={styles.container}>
      <Image
        style={styles.speakerImage}
        source={{ uri: speakerData.speakerData.image }}
      />
      <Text style={styles.speakerName}>{speakerData.speakerData.name}</Text>
      <Text style={styles.speakerBio}>{speakerData.speakerData.bio}</Text>
      <ActionButton
        onPress={() => Linking.openURL(speakerData.speakerData.url).catch(err => ('An error occurred', err))}
        text={'Read More on Wikipedia'}
      />
    </View>
  </ScrollView>
);


Speaker.PropTypes = {

};

export default Speaker;