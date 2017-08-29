import React, { Component } from 'react';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@expo/ex-navigation';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

//use get routenav
import Router from './routes';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, typography } from '../config/styles';

import LinearGradient from 'react-native-linear-gradient';


// const defaultRouteConfig = {
//   navigationBar: {
//     tintColor: 'white',
//     titleStyle: {
//       //change front with property in here
//     },
//     // renderBackground: () => (
//     //   background could be an image
//     // )
//   }
// };

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    // titleStyle: {
    // },
    renderBackground: () => {
      return (
        <LinearGradient
          start={{ x: 0.2, y: 1.0 }}
          end={{ x: 1, y: 0.2 }}
          colors={[colors.red, colors.purple]}
          style={StyleSheet.absoluteFillObject}
        />
      )
    }
  }
};

class DrawerNavigationLaytout extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    return (
      <DrawerNavigation
        id="R10"
        navigatorUID="R10"
        initialItem='schedule'
        selectedStyle={styles.selectedItemStyle}
      >
        <DrawerNavigationItem
          id="schedule"
          title="Schedule"
          selectedStyle={styles.selectedItemStyle}
          renderIcon={(isSelected) => this.renderIcon("md-calendar", isSelected)}
          renderTitle={this.renderTitle}>
          <StackNavigation
            id="schedule"
            defaultRouteConfig={defaultRouteConfig}
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="about"
          title="About"
          selectedStyle={styles.selectedItemStyle}
          renderIcon={(isSelected) => this.renderIcon("md-information-circle", isSelected)}
          renderTitle={this.renderTitle}>
          <StackNavigation
            id="about"
            defaultRouteConfig={defaultRouteConfig}
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="faves"
          title="Faves"
          selectedStyle={styles.selectedItemStyle}
          renderIcon={(isSelected) => this.renderIcon("md-heart", isSelected)}
          renderTitle={this.renderTitle}>
          <StackNavigation
            id="faves"
            defaultRouteConfig={defaultRouteConfig}
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }



  renderIcon(iconName, isSelected) {
    const color = isSelected ? 'white' : colors.mediumGrey
    return (<Icon name={iconName} size={24} color={color} />)
  }

  renderTitle(isSelected, title) {
    const color = isSelected ? 'white' : colors.mediumGrey
    const titles = {
      color: color,
      fontFamily: typography.fontMain,
      fontSize: 10
    }
    return (<Text style={titles}>{title}</Text>)
    //return text component
    //Set style: colors(isSelected, etc)
  }

  _renderHeader = () => {
    return (
      <View style={styles.header}>
      </View>
    );
  };

  _renderTitle(text: string, isSelected: boolean) {
    return (
      <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
        {text}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 20
  },

  selectedItemStyle: {
    backgroundColor: 'white'
  },

  titleText: {
    fontWeight: 'bold'
  },

  selectedTitleText: {
    color: 'white'
  }
});

export default DrawerNavigationLaytout;