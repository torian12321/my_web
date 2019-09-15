import React from "react";
import classNames from "classnames";
import { ICol } from "./Col.interfaces";
import styles from "./Col.module.scss";

const Col = ({ children, className }: ICol) => (
  <div className={classNames(styles.col, className)}>{children}</div>
);

export { Col };
