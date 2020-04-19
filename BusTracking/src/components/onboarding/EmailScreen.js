import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import TextInput from '../common/FloatingLabel';
import styles from '../../assests/styles/EmailScreen';
import Button from '../../components/common/Button';
import FloatingLabelInput from 'react-native-floating-labels';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

export default class EmailScreen extends Component {
  state = {
    email: '',
    pin: '',
    emailValidation: false,
    pinValidation: false,
    validation: false,
  };
  componentDidMount = () => {
    console.log('from email screen', this.props);
  };

  onLoginButtonPress = async () => {
    console.log('login button pressed');
    let data = {};
    data.email = this.state.email;
    data.pin = this.state.pin;
    await this.props.checkEmail(data);
    this.props.emailVerifiedStatus === 200
      ? this.props.navigation.navigate('UserHomePage')
      : null;
    console.log(this.props);
  };

  changeTextEmail = async email => {
    console.log('email pressed', email);
    //defining a regular expression for an email id
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    await this.setState({email: email});
    //checking whether the email id entered satisfies the regex
    if (emailRegEx.test(this.state.email)) {
      console.log('regex', emailRegEx.test(this.state.email));
      await this.setState({emailValidation: true});
    }
    this.state.emailValidation && this.state.pinValidation === true
      ? await this.setState({validation: true})
      : null;
    console.log('after state', this.state.email);
  };
  handlePinFillInput = async pin => {
    console.log('pass pressed', pin);
    await this.setState({pin: pin, pinValidation: true});
    this.state.emailValidation && this.state.pinValidation === true
      ? await this.setState({validation: true})
      : null;
    console.log('validarion', this.state.validation);
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.emailContainer}>
          <FloatingLabelInput
            label="Email"
            isFocused={true}
            value={this.state.email}
            onChangeText={text => this.changeTextEmail(text)}
            testID="emailText"
            inputTestLabel="emailLabel"
            autoCapitalize="none"
            keyboardType="email-address"
            inputStyle={styles.input}
            labelStyle={styles.labelInput}
            style={styles.formInput}>
            Email
          </FloatingLabelInput>
          <SmoothPinCodeInput
            ref={this.pinInput}
            placeholder={<View style={styles.placeholder} />}
            mask={<View style={styles.masked} />}
            maskDelay={500}
            codeLength={6}
            cellStyle={styles.cellStyle}
            cellStyleFocused={styles.cellFocused}
            textStyle={styles.textStyle}
            value={this.state.pin}
            onTextChange={async pin => await this.setState({pin})}
            onFulfill={this.handlePinFillInput}
            autoFocus={true}
            restrictToNumbers={true}
            password={true}
            testID="pinInput"
          />

          <Button
            onPress={this.onLoginButtonPress}
            validation={this.state.validation}
          />
        </View>
      </SafeAreaView>
    );
  }
}
