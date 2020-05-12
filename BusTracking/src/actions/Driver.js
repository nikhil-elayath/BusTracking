import axios from 'axios';
import {url} from '../config';

const cardUrl = url + '/driver-location/';
import {GET_DRIVER_LOCATION} from './Types';

export const updateDriverLocation = data => dispatch => {
  console.log('from updateDriverLocation action', data);
  console.log(cardUrl + '/update-driver-location');
  return axios
    .post(driverLocation + '/update-driver-location', data)
    .then(res => {
      dispatch({
        type: UPDATE_DRIVER_LOCATION,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({type: UPDATE_DRIVER_LOCATION, payload: err.response.data});
    });
};
export const getDriverLocation = data => dispatch => {
  console.log('from getdriver action', data);
  return axios
    .post(cardUrl + 'get-driver-location', data)
    .then(res => {
      dispatch({
        type: GET_DRIVER_LOCATION,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({type: GET_DRIVER_LOCATION, payload: err.response});
    });
};
