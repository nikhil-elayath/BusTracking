import React, {Component} from 'react'
import UserHomePage from '../../components/UserHomePage/UserHomePage'
import {connect} from 'react-redux'
import {getDriverLocation} from '../../actions/Driver'

export class UserHomePageContainer extends Component {
  render () {
    console.log('from container', this.props)
    return <UserHomePage {...this.props} />
  }
}

const mapStateToProps = state => ({
  driverLocation: state.driverReducer.driverLocation,
  // onboarding: state.onboardingReducer.onboarding,
  // userType: state.onboardingReducer.userType,
})
export default connect(mapStateToProps, {
  getDriverLocation,
})(UserHomePage)
