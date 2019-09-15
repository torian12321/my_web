import React from "react";
import classNames from "classnames";
import { IHeading } from "./Heading.interfaces";
import styles from "./Heading.module.scss";

const Heading = (props: IHeading) => {
  const { caption, level = 1, className } = props;
  const TagName: any = `h${level}`;

  return (
    <TagName
      className={classNames(
        styles.heading,
        styles[`heading__${level}`],
        className
      )}
    >
      {caption}
    </TagName>
  );
};

export { Heading };
