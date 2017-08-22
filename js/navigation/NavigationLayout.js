import React, { Component } from 'react';
// import from ex-nav
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
  static route = {
    // navigationBar: {
    //   visible: false
    // }
  }
  //Render the tab bar with nested tab items
  //and stack navs.
  render() {
    return (
      <TabNavigation
        id="R10"
        navigatorUID="R10"
        initialTab='about'
        tabBarColor="black">
        <TabItem
          id="about"
          title="About"
          renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected)}
          renderTitle={this.renderTitle}>
          <StackNavigation
            defaultRouteConfig={defaultRouteConfig}
            NavigatorUID="about"
            id="about"
            initialRoute={Router.getRoute('about')}
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
    return (<Text style={title}>{title}</Text>)
    //return text component
    //Set style: colors(isSelected, etc)
  }
}

export default NavigationLayout;