import { Switch, Route } from "react-router";
import paths from "./paths";

const Routes = () => {
  return <Switch>
    <Route exact path={paths.home} component={<div/>}/>
  </Switch>
}