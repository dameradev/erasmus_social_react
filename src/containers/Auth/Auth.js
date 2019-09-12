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
    }
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

  render() {
    const filedsArr = [];
    for (let key in this.state.fields) {
      filedsArr.push({ id: key, config: this.state.fields[key] });
    }

    const form = filedsArr.map(element => {
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
        <form className={classes.Form}>
          {form}
          <Button clicked={this.orderHandler}>Submit</Button>
        </form>
      </div>
    );
  }
}
export default Auth;
