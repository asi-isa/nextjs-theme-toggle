import COLORS from "../../constants/COLORS";
import ThemeType from "../../types/ThemeType";
import getCurrentTheme from "./getCurrentTheme";

export default () => {
  const root = window.document.documentElement;

  const currentTheme = getCurrentTheme();

  root.style.setProperty(
    "--color",
    currentTheme === "light" ? COLORS.dark.color : COLORS.light.color
  );

  root.style.setProperty(
    "--background",
    currentTheme === "light" ? COLORS.dark.background : COLORS.light.background
  );

  root.style.setProperty(
    "--current-theme",
    currentTheme === "light" ? "dark" : "light"
  );
};
