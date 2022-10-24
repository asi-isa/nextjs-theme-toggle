// Theme constants and types

export const COLORS = {
  light: {
    color: "black",
    colorMuted: "gray",
    colorAccent: "blue",
    background: "white",
  },
  dark: {
    color: "white",
    colorMuted: "gray",
    colorAccent: "orange",
    background: "black",
  },
  dawn: {
    color: "black",
    colorMuted: "gray",
    colorAccent: "orange",
    background: "#F5F1DA",
  },
};

export type Theme = keyof typeof COLORS;

export const Themes: Theme[] = Object.keys(COLORS)
  .sort()
  .map((theme) => theme as Theme);

export const NUM_THEMES = Themes.length;

export const DEFAULT_THEME: Theme = "light";
