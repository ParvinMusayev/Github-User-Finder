import React from "react";

//style
import css from "./ThemeSwitcher.module.scss";

//icons
import { ReactComponent as MoonIcon } from "../../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../../assets/icon-sun.svg";

const ThemeSwitcher: React.FC = () => {
  const [isDark, setDark] = React.useState(false);
  const ThemeIcon = isDark ? SunIcon : MoonIcon;
  const themeText = isDark ? "Light" : "Dark";

   React.useEffect(() => {
     document.body.setAttribute("data-theme", isDark ? "dark" : "light");
   }, [isDark]);

  return (
    <div className={css.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={css.icon} />
    </div>
  );
};

export default ThemeSwitcher;