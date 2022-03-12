import { makeStyles } from "@material-ui/core";
import SignIn from "../../../auth/SignIn";

const UnAuthenticatedButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SignIn/>
    </div>
    )
}

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  }
}))

export default UnAuthenticatedButton;