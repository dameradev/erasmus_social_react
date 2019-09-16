import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <React.Fragment>
    <NavigationItem href="/">Home</NavigationItem>
    <NavigationItem href="/auth">Auth</NavigationItem>
    <NavigationItem href="/logout">Logout</NavigationItem>
  </React.Fragment>
);
export default navigationItems;
