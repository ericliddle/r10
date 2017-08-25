import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  View
} from 'react-native';

import AboutAnimate from '../../components/AboutAnimate';
import { styles } from './styles';

const About = ({ data }) => (
  <ScrollView>
    <View style={styles.r10Logo}>
      <View>
        <Image
          source={require('../../assets/images/r10_logo.png')}
        />
      </View>
      <View>
        <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
        <Text>Date & Venue</Text>
        <Text>The R10 conference will take placeon Tuesday, June 27th, 2017, in Vancouver, BC</Text>
        <Text>Code of Conduct</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <AboutAnimate data={item} />
        }
        keyExtractor={(item, index) => index}
      />
    </View>
  </ScrollView>
);

About.PropTypes = {

};

export default About;