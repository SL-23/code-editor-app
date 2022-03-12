import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Toolbar, makeStyles, Switch, Typography } from "@material-ui/core";
import DarkModeIcon from "@material-ui/icons/Brightness2";
import { toggleDarkMode } from "../../../store/slides/darkmode/reducer";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import AuthenticatedButton from "./AuthenticatedButton";
import UnauthenticatedButton from "./UnauthenticatedButton";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const onChangeDarkMode = () => {
    dispatch(toggleDarkMode());

  };
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Code Editor App
        </Typography>
        <DarkModeIcon/>
        <Switch onChange={onChangeDarkMode} color="default" checked={darkMode}/>
        { isAuthenticated ?  
          <AuthenticatedButton/>
          :
          <UnauthenticatedButton/>
        }
      </Toolbar>
    </AppBar>)
}

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
  },
}))

export default Header;