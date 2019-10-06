import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul>
    <NavigationItem href="/">Home</NavigationItem>
    <NavigationItem href="/projects">Projects</NavigationItem>
    {!props.isAuthenticated ? (
      <React.Fragment>
        <NavigationItem href="/auth">Log in</NavigationItem>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <NavigationItem href="/profile">Profile</NavigationItem>

        <NavigationItem href="/logout">Logout</NavigationItem>
      </React.Fragment>
    )}
  </ul>
);
export default navigationItems;
