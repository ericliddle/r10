import React, { Component } from 'react';
import Router from './navigation/routes';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import About from './scenes/About';




export default class R10 extends Component {
  render() {
    return (
      // <About />
      <NavigationProvider router={Router}>
        <StackNavigation
          NavigatorUID="root"
          id="root"
          initialRoute={Router.getRoute('about')}
        />
      </NavigationProvider>
    );
  }
}

class AboutScreen extends Component {
  static route = {
    navigationBar: {
      title:'About',
    }
  }

  render() {
    return (
      <About />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});