// get themes from colors keys
export const Themes = ["light", "dark", "dawn"] as const;

type ThemeType = typeof Themes[number];

export const ThemesOrdinal: { [key: number]: ThemeType } = {
  0: "light",
  1: "dark",
  2: "dawn",
};

export default ThemeType;
