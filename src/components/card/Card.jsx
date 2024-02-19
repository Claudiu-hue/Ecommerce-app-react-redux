import React from "react";
import styles from "./Card.module.scss";

const Card = ({ children, cardClass }) => {
  // const som = Array.isArray(cardClass) ? cardClass : [cardClass];

  return <div className={`${styles.card} ${cardClass}`}>{children}</div>;
};

export default Card;
