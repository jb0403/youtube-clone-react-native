import { CHANGE_THEME } from "./ThemeType";

export const change_theme = (currentTheme) => {
  return {
    type: CHANGE_THEME,
    payload: currentTheme,
  };
};
