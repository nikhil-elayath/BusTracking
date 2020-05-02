import React, {Component} from 'react'
import DriverLocation from '../../components/driver/DriverLocation'
import {connect} from 'react-redux'
import {updateDriverLocation} from '../../actions/Driver'

export class DriverContainer extends Component {
  render () {
    console.log('from container', this.props)
    return <DriverLocation {...this.props} />
  }
}

const mapStateToProps = state => ({
  // onboarding: state.onboardingReducer.onboarding,
  // userType: state.onboardingReducer.userType,
})
export default connect(mapStateToProps, {
  updateDriverLocation,
})(DriverContainer)
