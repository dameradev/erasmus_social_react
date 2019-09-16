import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const navigationItem = props => (
  <li>
    <Link className={classes.NavigationItem} to={props.href}>
      {props.children}
    </Link>
  </li>
);

export default navigationItem;
