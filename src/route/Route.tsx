import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core";
import { Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";
import routes from "./routes";
import Loading from "../components/common/Loading/Loading";
import Header from "../components/common/Header/Header";

const Routes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();

  if (isLoading) {
    return<Loading/>
  }

  const codeEditor = () => <div>Code Editor App</div>
  return (
    <div className={classes.main}>
      <Header/>
      <div className={classes.page}>
        <Switch>
          <ProtectedRoute exact path={routes.codeEditor}>
            {codeEditor}
          </ProtectedRoute>
          <Route exact path={routes.home}>
            {
              isAuthenticated ? 
              <Redirect to={routes.codeEditor} />
              :
              <div>home</div>
            }
          </Route>
        </Switch>
      </div>
    </div>)
}
const useStyles = makeStyles(() => ({
  main: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  page: {
    height: "100%"
  }
}))
export default Routes;