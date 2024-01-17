import React from "react";

//style
import css from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={css.header}>
      <div className={css.logo}>GitHub</div>
      <button>Icon</button>
    </div>
  );
};

export default Header;
