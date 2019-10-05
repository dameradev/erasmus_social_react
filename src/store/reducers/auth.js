import * as actionTypes from "../actions/actionTypes";

const initalState = {
  token: null,
  error: null,
  userId: null,
  users: [],
  user: null,
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
    case actionTypes.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.user
      };
    }
    case actionTypes.ACCEPT_FRIEND_REQUEST_SUCCESS: {
      let currentUserIndex = state.users.findIndex(
        user => user._id === action.currentUserId
      );

      let currentUser = state.user;
      // console.log(currentUserIndex);
      // let currentUser = state.users.find(
      //   user => user._id === action.currentUserId
      // );
      const friendRequestIndex = currentUser.friendRequests.findIndex(
        friendRequest => {
          return friendRequest._id.toString() === action.id.toString();
        }
      );
      currentUser.friendRequests.splice(friendRequestIndex, 1);
      return {
        ...state,
        user: {
          ...state.user,
          friendRequests: currentUser.friendRequests
        }
      };
    }
    default:
      return state;
  }
};

export default reducer;
