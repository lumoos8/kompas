import React from "react";
import styles from "./NameAndTitle.module.css";

const NameAndTitle = ({ name, title }) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default NameAndTitle;