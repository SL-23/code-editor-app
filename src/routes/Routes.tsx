import { useAuth0 } from "@auth0/auth0-react";
import React, { Suspense } from "react";
import { Switch, Route } from "react-router";
import ProtectedRoute from "../auth/ProtectedRoute";
import paths from "./paths";

const Home = React.lazy(() => import("../pages/home/Home"))
const CodeEditor = React.lazy(() => import("../pages/code-editor/CodeEditor"))

const Routes = () => {
  const { isLoading } = useAuth0()

  if (isLoading) return <div>loading</div>
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={paths.home} component={Home} />
        <ProtectedRoute exact path={paths.codeEditor} component={CodeEditor} />
      </Switch>
    </Suspense >)

}
export default Routes