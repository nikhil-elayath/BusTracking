import {VERIFY_EMAIL} from './Types';

import axios from 'axios';

export const checkEmail = emailId => dispatch => {
  console.log('from check email action', emailId);
  return axios
    .get(onboardingUrl + 'check-email/', emailId)
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
