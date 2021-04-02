// frontend/bench_bnb.jsx

import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from './util/session_api_util'
import configureStore from './store/store';
import { receiveCurrentUser, logoutCurrentUser, receiveErrors } from './actions/session_actions';
// import createStore from './store/store';
// import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  const store = configureStore();
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.receiveCurrentUser = receiveCurrentUser;
  window.logoutCurrentUser = logoutCurrentUser;
  window.receiveErrors = receiveErrors;
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});