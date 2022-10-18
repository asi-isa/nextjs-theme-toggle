import ThemeType from "../../types/ThemeType";

export default () => {
  const root = window.document.documentElement;

  return window
    .getComputedStyle(root, ":root")
    .getPropertyValue("--current-theme") as ThemeType;
};
