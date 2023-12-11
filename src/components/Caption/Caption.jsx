import React from "react";
import styles from "./Caption.module.scss";
import { useTranslation } from "react-i18next";
function Caption() {
  const {t, i18n} = useTranslation('content')
  const capTitleUz = t('capTitle')
  const capTitleRu = t('capTitle')

  return (
    <div className={styles.caption}>
      <h1 className={styles.title}>
      {
        i18n.language === 'uz' ? (
          <>
          <span>Alibaba.com</span> <br />
          {capTitleUz}
          </>
        ) : (
          <>
          {capTitleRu} <br />
          <span>Alibaba.com</span>

          </>
        )
      }
      </h1>
      <div className={styles.box}>
        <div className={styles.describes}>
        <p>{t('capDescribe1')}</p>
          <p>{t('capDescribe2')}</p>
          <p>{t('capDescribe3')}</p>
        </div>
    
        <div className={styles.picture}>
          <div>
            <img className={styles.spiker} src="./images/spiker.webp" alt="spiker" />
          </div>
          <div>
        <img className={styles.play} src="./images/play.webp" alt="play" />
          </div> 
        </div>  
        

    

      </div>
    </div>
  );
}
export default Caption;
