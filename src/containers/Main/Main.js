import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Main.module.css";

import * as actions from "../../store/actions/index";

class Main extends Component {
  componentDidMount() {
    this.props.onGetSuggestedUsers();
  }

  render() {
    const suggestedUsers = this.props.users.map(user => {
      return (
        <div>
          <p>{user.email}</p>
        </div>
      );
    });
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
)(Main);
