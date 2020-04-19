import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../assests/styles/Button';
import ReuseableText from '../common/ReuseableText';

export default class Button extends Component {
  render() {
    return (
      <View>
        <View style={styles.buttonContainer}>
          <View
            style={
              this.props.validation === true
                ? styles.buttonVisible
                : styles.buttonNotVisible
            }>
            <TouchableOpacity
              onPress={
                this.props.validation == true ? this.props.onPress : null
              }>
              <ReuseableText
                text={'Login'}
                style={
                  this.props.validation === true
                    ? styles.visibleText
                    : styles.greyedText
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
