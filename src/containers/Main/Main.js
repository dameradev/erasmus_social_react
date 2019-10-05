import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../utility/axios";

import classes from "./Main.module.css";

import Button from "../../components/Button/Button";

import * as actions from "../../store/actions/index";

class Main extends Component {
  componentDidMount() {
    this.props.onGetSuggestedUsers();
  }
  addFriend = (currentUserId, userId) => {
    const addFriendData = {
      currentUserId,
      userId
    };
    axios
      .post("/add-friend", addFriendData)
      .then(response => console.log(response));
  };

  render() {
    console.log(this.props.users);
    let suggestedUsers;
    if (this.props.users) {
      suggestedUsers = this.props.users.map(user => {
        return (
          <div key={user._id}>
            <p>{user.email}</p>
            <Button
              clicked={(currentUserId, userId) =>
                this.addFriend(this.props.currentUserId, user._id)
              }
            >
              Add friend
            </Button>
          </div>
        );
      });
    }
    return (
      <div className={classes.Main}>
        <h1>HomePage</h1>
        {suggestedUsers}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.auth.users,
    currentUserId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetSuggestedUsers: () => dispatch(actions.getSuggestedUsers())
    // onAddFriend: (currentUserId, userId) =>
    //   dispatch(actions.addFriend(currentUserId, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
