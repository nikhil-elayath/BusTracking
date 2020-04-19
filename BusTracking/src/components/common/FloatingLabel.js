import React, {Component} from 'react';
import {Text, View} from 'react-native';
import FloatingLabelInput from 'react-native-floating-labels';

export default class FloatingLabel extends Component {
  render() {
    return (
      <View>
        <FloatingLabelInput
          onChange={this.props.onChange}
          onEndEditing={this.props.onEndEditing}>
          {this.props.placeholder}
        </FloatingLabelInput>
      </View>
    );
  }
}
