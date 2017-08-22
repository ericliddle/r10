import React, { Component } from 'react';

import {
  StyleSheet,
  StatusBar,
  NavigationStyles,
  // Text,
  // View
} from 'react-native';

import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from '@expo/ex-navigation';


import Router from './navigation/routes';
import {Store} from './redux/store';

import NavigationLayout from './navigation/NavigationLayout';
import About from './scenes/About';


const navigationContext = new NavigationContext({
  router: Router,
  store: Store
})

export default class R10 extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StatusBar barStyle={"light-content"} />
        <StackNavigation
          
          NavigatorUID="root"
          id="root"
          initialRoute={Router.getRoute('navigation')}
        />
      </NavigationProvider>
    );
  }
}

//TODO: Add below initial route above
// defaultRouteConfig={{
// styles: {...NavigationStyles.SlideVertical },
// }}
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