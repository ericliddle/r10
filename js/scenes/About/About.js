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

import { styles } from './styles'

const About = ({ data }) => (
  <ScrollView>
    <View style={styles.r10Logo}>
      <View>
        <Image
          source={require('../../assets/images/r10_logo.png')}
        />
      </View >
      <View>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) =>
              <View>
                <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
                <Text>Date & Venue</Text>
                <Text>The R10 conference will take placeon Tuesday, June 27th, 2017, in Vancouver, BC</Text>
                <Text>Code of Conduct</Text>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
              </View>
            }
          />
        </View >
      </View >
    </View>
  </ScrollView>
);

About.PropTypes = {

};

export default About;