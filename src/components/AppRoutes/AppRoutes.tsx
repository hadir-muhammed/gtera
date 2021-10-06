import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";

interface LocationState {
  redirectTo?: any;
}

function AppRoutes() {
  const { search, pathname } = useLocation<LocationState>();

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default AppRoutes;
