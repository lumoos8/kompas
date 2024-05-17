import React from "react";
import WaIcon from "../../../../assets/wa.svg?react";
import TgIcon from "../../../../assets/tg.svg?react";
import IcqIcon from "../../../../assets/icq.svg?react";
import styles from "./ButtonGroup.module.css";

const ButtonGroup = () => {
  return (
    <div className={styles.container}>
      <a href="">
        <WaIcon className={styles.svg} />
      </a>
      <a href="">
        <TgIcon className={styles.svg} />
      </a>
      <a href="">
        <IcqIcon className={styles.svg} />
      </a>
    </div>
  );
};

export default ButtonGroup;
