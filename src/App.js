import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";

import Main from "./containers/Main/Main";
import Auth from "./containers/Auth/Auth";
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route to="/auth" component={Auth} />
          <Route to="/" component={Main} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
