import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <React.Fragment>
    <NavigationItem href="/logout">Logout</NavigationItem>
    <NavigationItem href="/auth">Auth</NavigationItem>
  </React.Fragment>
);
export default navigationItems;
