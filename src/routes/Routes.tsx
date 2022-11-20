import React from "react";
import { Switch, Route } from "react-router";
import ProtectedRoute from "../auth/ProtectedRoute";
import paths from "./paths";

const Home = React.lazy(() => import("../pages/home/Home"))
const CodeEditor = React.lazy(() => import("../pages/code-editor/CodeEditor"))

const Routes = () => {
  return <Switch>
    <Route exact path={paths.home} component={Home} />
    <ProtectedRoute exact path={paths.codeEditor} component={CodeEditor} />
  </Switch>
}

export default Routes