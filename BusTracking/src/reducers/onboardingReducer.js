import {CHECK_MAIL} from '../actions/Types';
const initialState = {
  emailVerified: '',
};

export default function(state = initialState, action) {
  //calling the switch cases based on the action type
  switch (action.type) {
    case CHECK_MAIL:
      //returning the state and putting the data that is recieved from the api in to the emailVerified
      return {...state, emailVerified: action.payload};
    default:
      return state;
  }
}
