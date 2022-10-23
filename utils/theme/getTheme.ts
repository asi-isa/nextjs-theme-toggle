import ThemeType, { Themes, ThemesOrdinal } from "../../types/ThemeType";

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

export const getNextTheme = () => {
  const currentTheme = getCurrentTheme();

  function getNextThemeIdx() {
    const numThemes = Object.keys(ThemesOrdinal).length;
    for (const [idx, theme] of Object.entries(ThemesOrdinal)) {
      console.log("theme", theme);

      if (currentTheme === theme) {
        const nextIdx = +idx + 1;
        console.log("idx", idx);
        console.log("nextidx", nextIdx);
        console.log("nextidx % numthemes", nextIdx % numThemes);

        return nextIdx % numThemes;
      }
    }
  }

  const nextThemeIdx = getNextThemeIdx();

  return Themes[nextThemeIdx!];
};
