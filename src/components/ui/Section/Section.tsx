import React from "react";
import classNames from "classnames";
import { Container, Row, Heading } from "../";
import { ISection } from "./Section.interfaces";
import styles from "./Section.module.scss";

const Section = ({ children, id, title, className }: ISection) => (
  <section id={id} className={classNames(styles.section, className)}>
    {title && <Heading caption={title} />}
    <Container>
      <Row>{children}</Row>
    </Container>
  </section>
);

export { Section };
