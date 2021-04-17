import React from "react";
import { Switch, Redirect } from "react-router-dom";
import {
  PrivateRouteWithLayout,
  // RouteWithLayout,
  PublicRouteWithLayout
  // PrivateRouteWithLayout,
} from "../components";
import { MainWithSidebar, MinimalLayout } from "../layouts";

import {
  Home
 
} from "../pages";
function Routes() {
  return (
    <>
      <Switch>
        
        <PublicRouteWithLayout
          component={Home}
          layout={MainWithSidebar}
          path="/"
         // basename="/moman-raza/"
        />

            </Switch>
    </>
  );
}

export default Routes;
