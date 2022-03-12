import { createTheme, ThemeProvider} from "@mui/material/styles";
import { useAppSelector } from "../store/hooks";
import { PropsWithChildren } from "react";
import { commonColors, lightColors, darkModeColors } from "./colors";

const CustomThemeProvider = (props : PropsWithChildren<{}>) => {
  const darkMode = useAppSelector(state => state.darkMode);
  const theme = createTheme({
    palette : {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: commonColors.background   
      }
    },
    background: darkMode ? darkModeColors.background : lightColors.background,
    font: darkMode ? darkModeColors.font : lightColors.font,
    commonColors,
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default CustomThemeProvider;

declare module "@mui/material/styles" {
  interface Theme {
    background: string;
    font: string;
    commonColors: { [key:string] : string};

  }

  interface ThemeOptions {
    background: string;
    font: string;
    commonColors: { [key:string] : string};
  }
}