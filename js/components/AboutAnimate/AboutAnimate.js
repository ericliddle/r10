import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Animated
} from 'react-native';

import { styles } from './styles';

class AboutAnimate extends Component {

  constructor() {
    super();

    this.state = {
      display: false,
      spin: new Animated.Value(0)
    }
  }

  onPress = () => {
    this.spinItem();
    LayoutAnimation.linear();
    this.setState({ display: !this.state.display })
  }

  spinItem = () => {
    this.state.spin.setValue(0)
    Animated.timing(
      this.state.spin,
      { toValue: 1, duration: 200 }
    ).start();
  }


  render() {

    let spin = this.state.spin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    let animatedStyle = {
      width: 10,
      transform: [
        { rotate: spin }
      ]
    }
    return (
      <View>
        <TouchableOpacity style={styles.conductItems} onPress={this.onPress}>
          <Animated.Text style={animatedStyle}>
            <Text style={styles.plusSign}>{this.state.display ? '-' : '+'}</Text>
          </Animated.Text>
          <Text style={styles.conductTitle}>{this.props.data.title}</Text>
        </TouchableOpacity>
          {this.state.display && <Text style={styles.conductList}>{this.props.data.description}</Text>}
      </View>
    );
  }
}

export default AboutAnimate