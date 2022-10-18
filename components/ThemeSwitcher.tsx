import switchTheme from "../utils/theme/switchTheme";

const ThemeSwitcher = () => {
  return (
    <button
      style={{
        backgroundColor: "var(--background)",
        color: "var(--color)",
        fontSize: "1rem",
        border: "1px solid var(--color)",
        borderRadius: "1rem",
        padding: ".5rem",
      }}
      onClick={switchTheme}
    >
      Switch Theme
    </button>
  );
};

export default ThemeSwitcher;
