import React from "react";
import classes from "./Input.module.css";

const input = props => {
  console.log(props);
  return (
    <input
      className={classes.input}
      type={props.elementConfig.type}
      placeholder={props.elementConfig.placeholder}
      value={props.value}
      onChange={props.changed}
    />
  );
};

export default input;
