import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const navigationItem = props => (
  <Link className={classes.NavigationItem} to={props.href}>
    {props.children}
  </Link>
);

export default navigationItem;
