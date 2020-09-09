import { createMuiTheme } from "@material-ui/core/styles";
import themeJSON from "./theme.json";

export default function useCustomTheme() {
  return createMuiTheme(themeJSON);
}
