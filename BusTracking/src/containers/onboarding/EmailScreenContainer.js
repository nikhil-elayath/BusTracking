import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmailScreen from '../../components/onboarding/EmailScreen';
import {checkEmail} from '../../actions/Login';

export class EmailScreenContainer extends Component {
  render() {
    return <EmailScreen {...props} />;
  }
}

const mapStateToProps = state => ({
  onboarding: state.onboardingReducer.onboarding,
});

export default connect(
  mapStateToProps,
  {
    checkEmail,
  },
)(EmailScreenContainer);
