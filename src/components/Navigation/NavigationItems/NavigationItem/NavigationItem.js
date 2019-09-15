import React from "react";
import { Link } from "react-router-dom";

const navigationItem = props => <Link to={props.href}>{props.children}</Link>;

export default navigationItem;
