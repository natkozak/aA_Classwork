import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, receiveErrors } from '../actions/session_actions.js'

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return { session: action.errors}
    case RECEIVE_CURRENT_USER:
      return { session: [] }
    default:
      return state;
  }
}

export default sessionErrorsReducer;