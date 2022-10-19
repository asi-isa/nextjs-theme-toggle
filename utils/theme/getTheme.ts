import ThemeType from "../../types/ThemeType";

export const getCurrentTheme = () => {
  const root = window.document.documentElement;

  return window
    .getComputedStyle(root, ":root")
    .getPropertyValue("--current-theme") as ThemeType;
};

export const getOppositeTheme = () => {
  const currentTheme = getCurrentTheme();

  return currentTheme === "dark" ? "light" : "dark";
};
