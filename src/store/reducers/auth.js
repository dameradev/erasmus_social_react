import * as actionTypes from "../actions/actionTypes";

const initalState = {
  token: null,
  error: null,
  userId: null,
  users: [],
  loading: false
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        loading: false
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        loading: false
      };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false
      };
    case actionTypes.GET_USERS_FAIL:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
