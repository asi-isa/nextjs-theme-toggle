import { Theme, Themes, NUM_THEMES, COLORS } from "./ThemeSettings";
import { setTheme } from ".";

export const getCurrentTheme = () => {
  const root = window.document.documentElement;

  return window
    .getComputedStyle(root, ":root")
    .getPropertyValue("--current-theme") as Theme;
};

const getNextTheme = () => {
  const currentTheme = getCurrentTheme();

  const nextThemeIdx = (Themes.indexOf(currentTheme) + 1) % NUM_THEMES;

  return Themes[nextThemeIdx] as Theme;
};

export const switchTheme = () => {
  const nextTheme = getNextTheme();

  setTheme(COLORS, nextTheme);
};
