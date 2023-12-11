import React from "react";
import styles from "./Info.module.scss";
import { useTranslation } from "react-i18next";
function Info() {
  const {t, i18n} = useTranslation('content')
  const infoTitleUz = t('infoTitle')
  const infoTitleRu = t('infoTitle')

  return (
    <div className={styles.info}>
      <h2 className={styles.title}>
        {
          i18n.language === 'uz' ? (
            <>
            <span>Alibaba.com</span>
            {infoTitleUz}
            </>
          ) : (
            <>
            {infoTitleRu} <br /> <span>Alibaba.com</span>
            </>
          )
        }
      </h2>

      <div className={styles.items}>
        <div className={styles.item}>
          <span>1</span>
          <p>
            {t('infoItem')}
          </p>
        </div>
        <div className={styles.item}>
          <span>2</span>
          <p>{t('infoItem2')}</p>
        </div>
        <div className={styles.item}>
          <span>3</span>
          <p>
            {t('infoItem3')}
          </p>
        </div>
        <div className={styles.item}>
          <span>4</span>
          <p>
          {t('infoItem4')}
          </p>
        </div>
        <div className={styles.item}>
          <span>5</span>
          <p>
          {t('infoItem5')}
          </p>
        </div>
        <div className={styles.item}>
          <span>6</span>
          <p>{t('infoItem6')}</p>
        </div>
      </div>
    </div>
  );
}
export default Info;
