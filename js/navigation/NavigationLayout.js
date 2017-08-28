import React, { Component } from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';

import {
  Text,
} from 'react-native';

//use get routenav
import Router from './routes';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, typography } from '../config/styles';


const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    titleStyle: {
      //change front with property in here
    },
    // renderBackground: () => (
    //   background could be an image
    // )
  }
};

class NavigationLayout extends Component {
  // static route = {
    // navigationBar: {
    //   visible: false
    // }
  // }
  //Render the tab bar with nested tab items
  //and stack navs.
  render() {
    return (
      <TabNavigation
        id="R10"
        navigatorUID="R10"
        initialTab='schedule'
        tabBarColor="black">
        <TabItem
          id="schedule"
          title="Schedule"
          renderIcon={(isSelected) => this.renderIcon("ios-calendar", isSelected)}
          renderTitle={this.renderTitle}>
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id="about"
          title="About"
          renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected)}
          renderTitle={this.renderTitle}>
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        {/* 
        <TabItem
          id="maps"
          title="Maps"
          renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected)}
          renderTitle={this.renderTitle}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            navigatorUID="maps"
            id="maps"
            initialRoute={Router.getRoute('maps')}
          />
        </TabItem> */}


        <TabItem
          id="faves"
          title="Faves"
          renderIcon={(isSelected) => this.renderIcon("ios-heart", isSelected)}
          renderTitle={this.renderTitle}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            navigatorUID="faves"
            id="faves"
            initialRoute={Router.getRoute('faves')}
          />
        </TabItem>
      </TabNavigation>
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
}

export default NavigationLayout;