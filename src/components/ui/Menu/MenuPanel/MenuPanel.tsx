import React from "react";
import { IMenuPanel } from "./MenuPanel.interfaces";
import styles from "./MenuPanel.module.scss";

const MenuPanel = ({ isOpen, children }: IMenuPanel) => (
  <div className={styles["🍔"]}>{children}</div>
);

export { MenuPanel };
