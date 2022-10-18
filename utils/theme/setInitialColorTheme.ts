import COLORS from "../../constants/COLORS";
import INITIAL_THEME from "../../constants/INITIAL_THEME";

export default `
(function (){
  const root = window.document.documentElement;
  
  root.style.setProperty("--color", "${COLORS[INITIAL_THEME].color}");
  
  root.style.setProperty("--color-accent", "${COLORS[INITIAL_THEME].colorAccent}");
  
  root.style.setProperty("--background", "${COLORS[INITIAL_THEME].background}");
  
  root.style.setProperty("--current-theme", "${INITIAL_THEME}");
})()
`;
