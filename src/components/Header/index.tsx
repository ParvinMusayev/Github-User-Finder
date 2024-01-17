import React from "react";

//style
import css from "./Header.module.scss";
import { ThemeSwitcher } from "../index";

const Header: React.FC = () => {
  return (
    <div className={css.header}>
      <div className={css.logo}>GitHub</div>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
