import React, { Component } from "react";
import { connect } from "react-redux";
import Toolbar from "../../components/Toolbar/Toolbar";

class Layout extends Component {
  render() {
    return (
      <div>
        <Toolbar isAuth={this.props.isAuthenticated} />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
