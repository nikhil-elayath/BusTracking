import axios from 'axios'
import {url} from '../config'
const driverLocation = url + '/driver-location/'
import {GET_DRIVER_LOCATION} from './Types'

export const updateDriverLocation = data => dispatch => {
  console.log('from updateDriverLocation action', data)
  console.log(driverLocation + '/update-driver-location')
  return axios
    .post(driverLocation + '/update-driver-location', data)
    .then(res => {
      dispatch({
        type: UPDATE_DRIVER_LOCATION,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({type: UPDATE_DRIVER_LOCATION, payload: err.response.data})
    })
}
export const getDriverLocation = data => dispatch => {
  console.log('from getdriver action', data)
  console.log(driverLocation + '/get-driver-location')
  return axios
    .post(driverLocation + '/get-driver-location', data)
    .then(res => {
      dispatch({
        type: GET_DRIVER_LOCATION,
        payload: res.data,
      })
    })
    .catch(err => {
      dispatch({type: GET_DRIVER_LOCATION, payload: err.response.data})
    })
}
