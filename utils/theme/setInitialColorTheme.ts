import COLORS from "../../constants/COLORS";
import INITIAL_THEME from "../../constants/INITIAL_THEME";

const getInitialColorTheme = `
function getInitialColorTheme() {
  const persistedColorPreference = window.localStorage.getItem("color-mode");
  const hasPersistedPreference = typeof persistedColorPreference === "string";
  // If the user has explicitly chosen light or dark,
  // let's use it. Otherwise, this value will be null.
  if (hasPersistedPreference) {
    return persistedColorPreference;
  }
  // If they haven't been explicit, let's check the media
  // query
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";
  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }

  // If they are using a browser/OS that doesn't support
  // color themes, let's default to INITIAL_THEME.
  return "${INITIAL_THEME}"
}
`;

const cssify = `
function(str){
  // helper function to convert object key to css property like string
  let cssifyString = "--";
  for (const char of str) {
    if (char == char.toUpperCase()) {
      cssifyString += "-" + char.toLowerCase();
    } else {
      cssifyString += char;
    }
  }
  return cssifyString;
}
`;

export default `
(function (){
  // getInitialColorTheme
  const initialTheme = ${getInitialColorTheme}();

  console.log("initialTheme", initialTheme);

  // getColors
  const colors = ${JSON.stringify(COLORS)};

  // setInitialColorTheme
  const root = window.document.documentElement;

  for (const key in colors[initialTheme]) {
    root.style.setProperty(${cssify}(key), colors[initialTheme][key]);
  }

  root.style.setProperty("--current-theme", initialTheme);
})()
`;
