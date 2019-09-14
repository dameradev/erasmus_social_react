import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Auth.module.css";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import * as actions from "../../store/actions/index";

class Auth extends Component {
  state = {
    fields: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email"
        },
        value: ""
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Your password"
        },
        value: ""
      }
    },
    isSignup: true
  };

  isSignupHandler = () => {
    this.setState(prevState => {
      return { isSignup: !prevState.isSignup };
    });
  };

  inputChangedHandler = (event, elementId) => {
    const updatedFields = {
      ...this.state.fields,
      [elementId]: {
        ...this.state.fields[elementId],
        value: event.target.value
      }
    };

    this.setState({ fields: updatedFields });
  };

  formSubmitHandler = e => {
    e.preventDefault();

    this.props.onAuth({
      email: this.state.fields.email.value,
      password: this.state.fields.password.value
    });
  };

  render() {
    const filedsArr = [];
    for (let key in this.state.fields) {
      filedsArr.push({ id: key, config: this.state.fields[key] });
    }

    const form = filedsArr.map(element => {
      console.log(element.config);
      return (
        <Input
          key={element.id}
          elementConfig={element.config.elementConfig}
          value={element.config.value}
          changed={(event, elementId) =>
            this.inputChangedHandler(event, element.id)
          }
        />
      );
    });

    return (
      <div className={classes.Auth}>
        <h1>{this.state.isSignup ? "Sign up" : "Login"} form</h1>
        <form onSubmit={this.formSubmitHandler} className={classes.Form}>
          {form}
          <Button>Submit</Button>
        </form>

        <Button clicked={this.isSignupHandler}>
          {" "}
          Switch to {this.state.isSignup ? "Login" : "Sign up"}
        </Button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (token, id) => dispatch(actions.auth(token, id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Auth);
