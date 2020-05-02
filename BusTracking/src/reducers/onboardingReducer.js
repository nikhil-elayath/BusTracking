import {CHECK_MAIL} from '../actions/Types'
const initialState = {
  userType: '',
}

export default function (state = initialState, action) {
  //calling the switch cases based on the action type
  switch (action.type) {
    case CHECK_MAIL:
      //returning the state and putting the data that is recieved from the api in to the emailVerified
      console.log(action.payload.userType)
      return {...state, userType: action.payload.userType}
    default:
      return state
  }
}
