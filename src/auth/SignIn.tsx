import { useAuth0 } from "@auth0/auth0-react";
import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { commonColors } from "../theme/colors";

const SignIn = () => {
  const { loginWithRedirect } = useAuth0();
  const classes = useStyles();
  const onLogin = () => {
    loginWithRedirect();
  }
  return (
    <Button className={classes.button} onClick={onLogin}>
      Sign in
    </Button>
    )
}

const useStyles = makeStyles(() => ({
  button: {
    color: commonColors.black,
  }
}))

export default SignIn;