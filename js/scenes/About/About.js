import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  FlatList,
  Image,
  View
} from 'react-native';

import { styles } from './styles'

const About = ({ data }) => (

  <View style={styles.r10Logo}>
    {/* Header view */}
    <View>
      <Image
        source={require('../../assets/images/r10_logo.png')}
      />
      <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
      <Text>Date & Venue</Text>
      <Text>The R10 conference will take placeon Tuesday, June 27th, 2017, in Vancouver, BC</Text>
    </View >
    <View>
      {/* Body of About page */}
      <View>
        <Text>Code of Conduct</Text>
        <FlatList
          data={data}
          renderItem={({ item }) =>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          }
          keyExtractor={(item, index) => index}
        />
      </View >
    </View >
  </View>

);

About.PropTypes = {

};

export default About;