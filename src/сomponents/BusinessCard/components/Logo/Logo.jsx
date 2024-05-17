import React from "react";
import styles from "./Logo.module.css";
import LogoIcon from "../../../../assets/logo.svg?react";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <LogoIcon className={styles.logoIcon} />
    </div>
  );
};

export default Logo;
