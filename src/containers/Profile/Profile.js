import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "../../utility/axios";

import Button from "../../components/Button/Button";

import * as actions from "../../store/actions/index";

class Profile extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    // axios.get("/user/" + this.props.userId).then(response => {
    //   this.setState({ user: response.data.user });
    // });
    // console.log(typeof this.props.userId);
    this.props.onGetUser(this.props.userId);
    this.props.onGetSuggestedUsers();
  }

  onAcceptRequest = (e, id, currentUserId) => {
    e.preventDefault();
    axios
      .post("/accept-request", { id, currentUserId })
      .then(response => console.log(response));
  };

  render() {
    let friendRequests;
    if (this.props.user) {
      friendRequests = this.props.user.friendRequests.map(friendRequest => {
        return (
          <div key={friendRequest._id}>
            Friend request from {friendRequest.email}
            <Button
              clicked={(id, currentUserId) =>
                this.props.onAcceptFriendRequest(
                  friendRequest._id,
                  this.props.userId
                )
              }
            >
              Accept request
            </Button>
          </div>
        );
      });
    }
    return (
      <div>
        <h1>{this.props.user ? this.props.user.email : null}</h1>
        {friendRequests}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    users: state.auth.users,
    user: state.auth.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetSuggestedUsers: () => dispatch(actions.getSuggestedUsers()),
    onAcceptFriendRequest: (id, currentUserId) =>
      dispatch(actions.acceptFriendRequest(id, currentUserId)),
    onGetUser: userId => dispatch(actions.getUser(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
