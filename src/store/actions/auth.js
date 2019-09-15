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
        dispatch(authSuccess(response.data.token, response.data.userId));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};
