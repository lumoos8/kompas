import React from "react";
import styles from "./BusinessCard.module.css";
import Divider from "./components/Divider/Divider";
import Logo from "./components/Logo/Logo";
import NameAndTitle from "./components/NameAndTitle/NameAndTitle";
import ButtonGroup from "./components/IconButton/ButtonGroup";
import BackLogo from "../../assets/backLogo.svg?react";
import InfoBlock from "./components/InfoBlock/InfoBlock";

const BusinessCard = () => {
  return (
    <>
      <div className={styles.businessCard}>
        <Logo />

        <Divider />

        <div className={styles.nameContainer}>
          <NameAndTitle name="Востриков Иван" title="генеральный директор" />
          <ButtonGroup />
        </div>

        <InfoBlock />
      </div>
      <BackLogo className={styles.backLogo} />
    </>
  );
};

export default BusinessCard;
