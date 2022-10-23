import { Theme, COLORS, DEFAULT_THEME } from "./ThemeSettings";

// util functions
/**
 * converts camelCase string to kebab-case with
 * leading '--'
 */
function cssify(str: string) {
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

/**
 * Returns either the prefered theme from local storage, media query
 * or the default if user has no preferences.
 */
function getInitialColorTheme(defaultTheme: Theme) {
  const persistedColorPreference = window.localStorage.getItem("color-mode");
  if (persistedColorPreference) {
    return persistedColorPreference as Theme;
  }

  const hasDarkMediaQueryPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  if (hasDarkMediaQueryPreference) {
    return "dark";
  }

  return defaultTheme;
}

/**
 * sets css values and local storage to match the current theme
 */
export function setTheme(colors: typeof COLORS, theme: Theme) {
  const root = window.document.documentElement;

  for (const [key, color] of Object.entries(colors[theme])) {
    root.style.setProperty(cssify(key), color);
  }

  root.style.setProperty("--current-theme", theme);

  window.localStorage.setItem("color-mode", theme);
}

// main script
function setInitialColorTheme_(defaultTheme: Theme, colors: typeof COLORS) {
  const initialTheme = getInitialColorTheme(defaultTheme);

  setTheme(colors, initialTheme);
}

// main script
const setInitialColorTheme = `
  // 'import' util functions
  ${cssify}
  ${getInitialColorTheme}
  ${setTheme}
  
  // 'execute' main script
  (${setInitialColorTheme_})("${DEFAULT_THEME}", ${JSON.stringify(COLORS)})
`;

export default setInitialColorTheme;
