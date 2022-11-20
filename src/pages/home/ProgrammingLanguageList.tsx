import { Button, makeStyles } from "@material-ui/core";
import { BlankFileIcon, CSS3Icon, GoIcon, JavaIcon, Javascript, PhpIcon, PythonIcon, ReactIcon, RubyIcon, TypescriptIcon } from "../../assets/images";

const ProgrammingLanguageList = () => {
  const classes = useStyles();
  return (
    <div>
      <BlankFileIcon className={classes.icon} />
      <CSS3Icon className={classes.icon} />
      <GoIcon className={classes.icon} />
      <JavaIcon className={classes.icon} />
      <Javascript className={classes.icon} />
      <PhpIcon className={classes.icon} />
      <PythonIcon className={classes.icon} />
      <ReactIcon className={classes.icon} />
      <RubyIcon className={classes.icon} />
      <TypescriptIcon className={classes.icon} />
    </div>
  )
}

const useStyles = makeStyles(() => ({
  icon: {
    padding: "10px",
    height: "50px",
    width: "50px"
  }

}))

export default ProgrammingLanguageList;