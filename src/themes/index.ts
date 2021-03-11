import { darkTheme } from "./dark-theme";
import { lightTheme } from "./light-theme";
import { ThemeType } from "../types";

const themes = {
  [ThemeType.DARK]: darkTheme,
  [ThemeType.LIGHT]: lightTheme,
};
export default themes;
