import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Animated
} from 'react-native';

class AboutAnimate extends Component {

  constructor() {
    super();

    this.state = {
      display: false,
      spin: new Animated.Value(0)
    }
  }

  onPress = () => {
    //This is calling spinItem
    this.spinItem();
    LayoutAnimation.linear();
    this.setState({ display: !this.state.display })
  }

  spinItem = () => {
    this.state.spin.setValue(0)
    Animated.timing(
      this.state.spin,
      { toValue: 1, duration: 300 }
    ).start();
  }


  render() {

    let spin = this.state.spin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    let animatedStyle = {
      transform: [
        {rotate: spin}
      ]
    }
    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <View>
            <Animated.Text style={animatedStyle}>
              <Text>{this.state.display ? '-' : '+'}</Text>
            </Animated.Text>
            <Text>{this.props.data.title}</Text>
          </View>
        </TouchableOpacity>
        {this.state.display && <Text>{this.props.data.description}</Text>}
      </View>
    );
  }
}

export default AboutAnimate