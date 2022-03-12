import { makeStyles } from "@material-ui/core";
import ProgrammingLanguageList from "../components/common/Home/ProgrammingLanguageList";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.welcomeMessage}>Welcome to Code Editor App</div>
        <ProgrammingLanguageList/>
    </div>
    )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundClip: theme.background,
  },
  welcomeMessage: {
    padding: "15px",
    fontSize: "30px",
    color: theme.font
  }
}))

export default Home;