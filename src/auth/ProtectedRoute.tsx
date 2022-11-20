import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType, PropsWithChildren } from "react";
import { Route } from "react-router";
import Loading from "../components/common/Loading/Loading";

type ProtectedRouteProps = {
  component: ComponentType;
  [key: string]: any
}

const ProtectedRoute = ({ component, ...args }: ProtectedRouteProps) =>
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />
    })}
    {...args}
  />


export default ProtectedRoute;