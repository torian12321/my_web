import React from "react";
import classNames from "classnames";
import { IMenuButton } from "./MenuButton.interfaces";
import styles from "./MenuButton.module.scss";

const MenuButton = ({ isOpen, onClick }: IMenuButton) => (
  <div
    className={classNames(styles["🍔"], isOpen && styles[`🍔--isOpen`])}
    onClick={onClick}
  >
    <div />
    <div />
    <div />
  </div>
);

export { MenuButton };
