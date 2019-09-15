import React from "react";
import classNames from "classnames";
import { IQuote } from "./Quote.interfaces";
import styles from "./Quote.module.scss";

const Quote = ({ caption, author, cite, className }: IQuote) => (
  <blockquote cite={cite} className={classNames(styles["💬"], className)}>
    {caption}
    {author && <span className={styles.author}>{author}</span>}
    {/* 
     <Icon className={styles.icon}  name="quote" />
     <Icon className={styles.icon} name="quote" rotate={180} />
   */}
  </blockquote>
);

export { Quote };
