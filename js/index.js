import React, { Component } from 'react';

import { Provider } from 'react-redux';

import {
  StyleSheet,
  StatusBar,
  LayoutAnimation,
  TouchableOpacity,
  // Text,
  // View
} from 'react-native';

import {
  NavigationProvider,
  StackNavigation,
  NavigationContext,
  NavigationStyles
} from '@expo/ex-navigation';


import Router from './navigation/routes';
import Store from './redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
})

export default class R10 extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider
          context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation
            navigatorUID="root"
            id="root"
            //TODO:
            // Change back to initialRoute={Router.getRoute('navigation')}
            // when done with individual pages
            initialRoute={Router.getRoute('navigation')}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}

{/* defaultRouteConfig={{
  styles: { ...NavigationStyles.SlideVertical },
}} */}

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