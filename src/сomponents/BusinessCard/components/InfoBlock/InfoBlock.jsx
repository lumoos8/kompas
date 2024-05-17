import React from "react";
import styles from "./InfoBlock.module.css";

const InfoBlock = () => {
  return (
    <>
      <div className={styles.infoContainer}>
        <p className={styles.phone}>+7 (921) 780-84-40</p>
        <p className={styles.email}>iv@tdcompass.ru</p>
        <a className={styles.link} href="tdcompass.ru">
          tdcompass.ru
        </a>
      </div>
    </>
  );
};

export default InfoBlock;
