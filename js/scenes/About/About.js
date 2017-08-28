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
    <View style={styles.container}>
      <View style={styles.r10Logo}>
        <Image
          source={require('../../assets/images/r10_logo.png')}
        />
      </View>
      <View>
        <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
        <Text style={styles.sectionHeader}>Date & Venue</Text>
        <Text>The R10 conference will take placeon Tuesday, June 27th, 2017, in Vancouver, BC</Text>
        <Text style={styles.sectionHeader}>Code of Conduct</Text>
      </View>
      <FlatList
        style={styles.conductItems}
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