import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class ReuseableText extends Component {
  render() {
    return (
      <View>
        <Text style={this.props.style}>{this.props.text} </Text>
      </View>
    );
  }
}
