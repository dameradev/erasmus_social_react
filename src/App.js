import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./hoc/Layout/Layout";

import Main from "./containers/Main/Main";
import Auth from "./containers/Auth/Auth";
import Profile from "./containers/Profile/Profile";
import Logout from "./containers/Auth/Logout/Logout";

import * as actions from "./store/actions/index";

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAuthLogin();
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/profile" component={Profile} />
            <Route path="/logout" component={Logout} />
            <Route path="/" component={Main} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAuthLogin: () => dispatch(actions.checkAuthState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
