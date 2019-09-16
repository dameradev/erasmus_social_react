import React from "react";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";

const toolBar = props => (
  <nav>
    <NavigationItems isAuthenticated={props.isAuth} />
  </nav>
);

export default toolBar;
