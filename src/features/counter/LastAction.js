import React from "react";
import { useSelector } from "react-redux";

import styles from "./Counter.module.css";

export const PrimitiveSelector = () => {
  const lastAction = useSelector((state) => state.counter.lastAction);
  return <div className={styles.primitiveSelector}>{lastAction}</div>;
};

export const ObjectSelector = () => {
  const { lastAction } = useSelector((state) => state.counter);
  return <div className={styles.objectSelector}>{lastAction}</div>;
};
