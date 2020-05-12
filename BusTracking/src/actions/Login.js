import {CHECK_MAIL} from './Types';

import axios from 'axios';
// import {url} from '../config';
import {url} from '../config';
const cardUrl = url + '/onboarding/';
export const checkEmail = emailId => dispatch => {
  console.log('from check email action', emailId);
  // console.log(onboardingUrl + '/login');
  return axios
    .post(cardUrl + 'login', emailId)
    .then(res => {
      dispatch({
        type: CHECK_MAIL,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({type: CHECK_MAIL, payload: err.response.data});
    });
};
