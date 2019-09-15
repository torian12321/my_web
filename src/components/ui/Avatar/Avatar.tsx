import React from "react";
import classNames from "classnames";
import { IAvatar } from "./Avatar.interfaces";
import styles from "./Avatar.module.scss";

const Avatar = ({
  src = "http://placeimg.com/200/200/people",
  className
}: IAvatar) => (
  <div
    style={{ backgroundImage: `url(${src})` }}
    className={classNames(styles.avatar, className)}
  />
);

export { Avatar };
