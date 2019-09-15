import React from "react";
import classNames from "classnames";
import { IRow } from "./Row.interfaces";
import styles from "./Row.module.scss";

const Row = ({ children, className }: IRow) => (
  <div className={classNames(styles.row, className)}>{children}</div>
);

export { Row };
