import * as actionTypes from "./actionTypes";

import axios from "../../utility/axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, id) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    userId: id,
    token: token
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  // localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const auth = (data, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    let url = "/signup";
    if (!isSignup) {
      url = "/login";
    }
    axios
      .post(url, data)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        dispatch(authSuccess(response.data.token, response.data.userId));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const checkAuthState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    }
    const userId = localStorage.getItem("userId");
    dispatch(authSuccess(token, userId));
  };
};
