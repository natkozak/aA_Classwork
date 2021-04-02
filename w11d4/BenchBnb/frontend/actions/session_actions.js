import { signup, logout, login } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
});

// thunk action creator
export const createNewUser = formUser => dispatch => signup(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const requestLogin = formUser => dispatch => login(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const requestLogout = () => dispatch => logout()
  .then(() => dispatch(logoutCurrentUser()));