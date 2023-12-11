import React from "react";
import styles from "./Sponsors.module.scss";
import { useTranslation } from "react-i18next";
function Sponsors() {
  const {t} = useTranslation('content')

  return (
    <div className={styles.sponsors}>
      <div className={styles.box}>
        <div className={styles.items}>
          <img src="./images/similarweb.webp" alt="similarweb" />
          <p>{t('sponItem')}</p>
        </div>
        <div className={styles.items}>
          <img src="./images/forbes.webp" alt="forbes" />
          <p>{t('sponItem2')}</p>

        </div>
        <div className={styles.items}>
          <img src="./images/facebook.webp" alt="facebook" />
          <p>{t('sponItem3')}</p>
          
        </div>
        <div className={styles.items}>
          <img src="./images/google-play.webp" alt="google-play" />
          <p>{t('sponItem4')}</p>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
