import COLORS from "../../constants/COLORS";
import { getOppositeTheme } from "./getTheme";

const cssify = (str: string): string => {
  let cssifyString = "--";
  for (const char of str) {
    if (char == char.toUpperCase()) {
      cssifyString += "-" + char.toLowerCase();
    } else {
      cssifyString += char;
    }
  }
  return cssifyString;
};

export default () => {
  const root = window.document.documentElement;

  const oppositeTheme = getOppositeTheme();

  for (const [key, color] of Object.entries(COLORS[oppositeTheme])) {
    root.style.setProperty(cssify(key), color);
  }

  root.style.setProperty("--current-theme", oppositeTheme);

  window.localStorage.setItem("color-mode", oppositeTheme);
};
