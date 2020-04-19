// In App.js in a new project

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';

import Dummy from '../src/components/onboarding/EmailScreen';
console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dummy />
      </Provider>
    );
  }
}
