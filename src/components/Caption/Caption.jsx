import React from "react";
import styles from "./Caption.module.scss";
function Caption() {
  return (
    <div className={styles.caption}>
      <h1 className={styles.title}>
        Продавать <br /> на<span> Alibaba.com</span>
      </h1>
      <div className={styles.box}>
        <div className={styles.describes}>
        <p>Показать товары B2B покупателям из 220 стран и регионов</p>
          <p>Получить международную верификацию компании</p>
          <p>Оцифровать общение с покупателями</p>
        </div>

        <div className={styles.picture}>
          <div>
            <img className={styles.spiker} src="./images/spiker.webp" alt="spiker" />
          </div>
          <div>
        <img className={styles.play} src="./images/play.svg" alt="play" />
          </div> 
        </div>  
        

    

      </div>
    </div>
  );
}
export default Caption;
