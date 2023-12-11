import React from "react";
import styles from "./Content.module.scss";
import { useTranslation } from "react-i18next";
function Content() {
  const {t} = useTranslation('content')
  
  return (
    <div className={styles.content}>
      <div className={styles.parent}>
        <div className={styles.box}>
          <h3 className={styles.title}>
            {t('conSpan')}<br/>
            {t('conTitle')}
          </h3>
          <div className={styles.items}>
          <div className={styles.item}>
            <img src="./images/globus.webp" alt="globus" loading="lazy" />
            <p>{t('conItem')}</p>
          </div>
          <div className={styles.item}>
            <img src="./images/cart.webp" alt="cart" loading="lazy" />
            <p>{t('conItem2')}</p>
          </div>
          <div className={styles.item}>
            <img src="./images/letter.webp" alt="letter" loading="lazy" />
            <p>{t('conItem3')}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
