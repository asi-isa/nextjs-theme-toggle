import COLORS from "../../constants/COLORS";
import getCurrentTheme from "./getCurrentTheme";

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

  const currentTheme = getCurrentTheme();

  const notCurrentTheme = currentTheme === "light" ? "dark" : "light";

  for (const [key, color] of Object.entries(COLORS[notCurrentTheme])) {
    root.style.setProperty(cssify(key), color);
  }

  root.style.setProperty("--current-theme", notCurrentTheme);
};
