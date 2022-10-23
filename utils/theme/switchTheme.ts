import COLORS from "../../constants/COLORS";
import { getNextTheme, getOppositeTheme } from "./getTheme";

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

  // const oppositeTheme = getOppositeTheme();

  const nextTheme = getNextTheme();
  console.log("nextTheme", nextTheme);

  for (const [key, color] of Object.entries(COLORS[nextTheme])) {
    root.style.setProperty(cssify(key), color);
  }

  root.style.setProperty("--current-theme", nextTheme);

  window.localStorage.setItem("color-mode", nextTheme);
};
