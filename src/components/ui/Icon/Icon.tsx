import React from "react";
import classNames from "classnames";
import { IIcon } from "./Icon.interfaces";
import styles from "./Icon.module.scss";
var icons = require("./icons");

const Icon = (props: IIcon) => {
  const { name, color, className, width = 1, height, rotate = 0 } = props;

  const iconPaths = icons[name],
    st: any = {
      width: `${width}em`,
      height: height && `${height}em`,
      fill: color,
      transform: rotate && `rotate(${rotate}deg)`
    };

  return (
    <svg
      viewBox="0 0 32 32"
      style={st}
      className={classNames(styles.icon, className)}
    >
      <g>
        {iconPaths &&
          iconPaths.map((pathProps: any, i: number) => (
            <path {...pathProps} key={i} />
          ))}
      </g>
    </svg>
  );
};

export { Icon };
