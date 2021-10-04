import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core";
import { Redirect, Route, Switch } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute";
import routes from "./routes";
import Loading from "../components/common/Loading";

const Routes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();

  if (isLoading) {
    return<Loading/>
  }

  return (
    <div className={classes.main}>
      <div>Header</div>
      <div className={classes.page}>
        <Switch>
          <ProtectedRoute path={routes.codeEditor} component={<div>code editor</div>}/>
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