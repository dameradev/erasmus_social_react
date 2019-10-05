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
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
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
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("expirationDate", expirationDate);
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
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      const userId = localStorage.getItem("userId");
      if (expirationDate < new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};

export const getUsersSuccess = users => {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    users
  };
};
export const getUsersFail = error => {
  return {
    type: actionTypes.GET_USERS_FAIL,
    error
  };
};

export const getSuggestedUsers = () => {
  return dispatch => {
    axios
      .get("/suggested-users")
      .then(response => {
        dispatch(getUsersSuccess(response.data.users));
      })
      .catch(err => getUsersFail(err));
  };
};

export const getUserSuccess = user => {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    user
  };
};

export const getUserFail = error => {
  return {
    type: actionTypes.GET_USER_FAIL,
    error
  };
};
export const getUser = userId => {
  return dispatch => {
    axios
      .get("/user" + userId)
      .then(response => {
        dispatch(getUsersSuccess(response.data.user));
      })
      .catch(err => getUsersFail(err));
  };
};

// export const addFriend = (currentUserId, userId) => {
//   return dispatch => {
//     const addFriendData = {
//       currentUserId,
//       userId
//     };
//     axios
//       .post("/add-friend", addFriendData)
//       .then(response => console.log(response));
//   };
// };
