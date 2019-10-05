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
    axios.get("/user/" + this.props.userId).then(response => {
      this.setState({ user: response.data.user });
    });
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
    if (this.state.user) {
      friendRequests = this.state.user.friendRequests.map(friendRequest => {
        return (
          <form
            onSubmit={(e, id, currentUserId) =>
              this.onAcceptRequest(e, friendRequest._id, this.props.userId)
            }
          >
            Friend request from {friendRequest.email}
            <Button>Accept request</Button>
          </form>
        );
      });
    }
    return (
      <div>
        <h1>{this.state.user ? this.state.user.email : null}</h1>
        {friendRequests}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    users: state.auth.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetSuggestedUsers: () => dispatch(actions.getSuggestedUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
