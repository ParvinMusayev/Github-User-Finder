import React, { ReactNode } from "react";

//style
import css from "./Container.module.scss";

interface IContainerProps {
  children: ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
