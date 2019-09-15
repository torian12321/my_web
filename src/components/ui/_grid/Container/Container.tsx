import React from "react";
import classNames from "classnames";
import { IContainer } from "./Container.interfaces";
import styles from "./Row.module.scss";

const Container = ({ children, className }: IContainer) => (
  <div className={classNames(styles.container, className)}>{children}</div>
);

export { Container };
