import React from "react";

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

import themeJSON from "./theme.json";

const useCustomTheme = () => {
  const theme = createMuiTheme(themeJSON);
  return responsiveFontSizes(theme);
};

export default useCustomTheme;
