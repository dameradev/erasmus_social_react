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
    type: actionTypes.AUTH_SUCCESS,
    error
  };
};

export const auth = data => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post("/signup", data)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.token, response.userId));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};
