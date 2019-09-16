import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul>
    <NavigationItem href="/">Home</NavigationItem>
    {!props.isAuthenticated ? (
      <React.Fragment>
        <NavigationItem href="/auth">Log in</NavigationItem>
      </React.Fragment>
    ) : (
      <NavigationItem href="/logout">Logout</NavigationItem>
    )}
  </ul>
);
export default navigationItems;
