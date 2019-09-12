import React, { Component } from "react";
import classes from "./Auth.module.css";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

class Auth extends Component {
  state = {
    fields: {
      name: {
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
    console.log(this.state);
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
        <form className={classes.Form}>
          {form}
          <Button clicked={e => this.formSubmitHandler(e)}>Submit</Button>
        </form>

        <Button clicked={this.isSignupHandler}>
          {" "}
          Switch to {this.state.isSignup ? "Login" : "Sign up"}
        </Button>
      </div>
    );
  }
}
export default Auth;
