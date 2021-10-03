import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { useAppSelector } from "../store/hooks";
import React, { PropsWithChildren } from "react";
import { appColors, darkModeColors } from "./color";

const CustomThemeProvider = (props : PropsWithChildren<{}>) => {
  const darkMode = useAppSelector(state => state.darkMode);
  const theme = createMuiTheme({
    palette : {
      type: darkMode ? "dark" : "light",
      primary: {
        main: appColors.background
      }
    },
    background: darkMode ? darkModeColors.background : appColors.background,
    font: darkMode ? darkModeColors.font : appColors.font
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default CustomThemeProvider;

declare module "@material-ui/core/styles/createTheme" {
  interface Theme {
    background: string,
    font: string
  }

  interface ThemeOptions {
    background: string,
    font: string
  }
}