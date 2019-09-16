import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul>
    {!props.isAuthenticated ? (
      <React.Fragment>
        <NavigationItem href="/">Home</NavigationItem>
        <NavigationItem href="/auth">Log in</NavigationItem>
      </React.Fragment>
    ) : (
      <NavigationItem href="/logout">Logout</NavigationItem>
    )}
  </ul>
);
export default navigationItems;
