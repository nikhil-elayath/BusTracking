import {combineReducers} from 'redux'
import onboardingReducer from './onboardingReducer'
import driverReducer from './driverReducer'
export default combineReducers({
  onboardingReducer,
  driverReducer,
})
