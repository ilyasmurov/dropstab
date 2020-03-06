import React from "react";
import { Route } from "react-router";

import Index from "./pages/Index";

const Routes = () => (
  <>
    <Route exact path="/" component={Index} />
  </>
);

export default Routes;
