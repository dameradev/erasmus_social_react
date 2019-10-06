import React from "react";
import classes from "./Input.module.css";

const input = props => {
  let inputElement = null;
  console.log(props, "INPUT PROPS");
  switch (props.elementType) {
    case "select":
      inputElement = (
        <select value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={classes.input}
          type={props.elementConfig.type}
          placeholder={props.elementConfig.placeholder}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return inputElement;
};

export default input;
{
  /* <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select> */
}
