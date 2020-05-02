import {GET_DRIVER_LOCATION} from '../actions/Types'
const initialState = {
  driverLocation: [],
}

export default function (state = initialState, action) {
  //calling the switch cases based on the action type
  switch (action.type) {
    case GET_DRIVER_LOCATION:
      //returning the state and putting the data that is recieved from the api in to the emailVerified
      console.log(action.payload)
      return {...state, driverLocation: action.payload.data}
    default:
      return state
  }
}
