import COLORS from "../../constants/COLORS";
import DEFAULT_THEME from "../../constants/DEFAULT_THEME";
import ThemeType from "../../types/ThemeType";

function setInitialColorTheme(colors: typeof COLORS, defaultTheme: ThemeType) {
  /**
   * Helper function to get either the user prefered color theme from local storage or
   * from the media query. If user has no preferences, it returns the specified default theme.
   * @returns ThemeType
   */
  function getInitialColorTheme(defaultTheme: ThemeType): ThemeType {
    // prefered color theme from local storage
    const persistedColorPreference = window.localStorage.getItem("color-mode");
    const hasPersistedPreference = typeof persistedColorPreference === "string"; // TODO check notwendig?
    if (hasPersistedPreference) {
      return persistedColorPreference as ThemeType;
    }

    // prefered color theme from media query
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const hasMediaQueryPreference = typeof mql.matches === "boolean"; // TODO check notwendig?
    if (hasMediaQueryPreference) {
      return mql.matches ? "dark" : "light";
    }

    return defaultTheme;
  }

  /**
   * helper function to convert strings to kebab-case with
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

  const initialTheme = getInitialColorTheme(defaultTheme);

  // setInitialColorTheme
  const root = window.document.documentElement;

  for (const [key, color] of Object.entries(colors[initialTheme])) {
    root.style.setProperty(cssify(key), color);
  }

  root.style.setProperty("--current-theme", initialTheme);
}

export default `
(${setInitialColorTheme}(
    ${JSON.stringify(COLORS)},
    "${DEFAULT_THEME}"
  )
)`;
