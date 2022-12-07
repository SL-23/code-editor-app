import { makeStyles } from "@material-ui/core";
import SignOut from "../../../auth/SignOut"

const AuthenticatedButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SignOut />
    </div>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  }
}))

export default AuthenticatedButton;