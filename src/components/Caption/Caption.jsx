import React from "react";
import styles from "./Caption.module.scss";
function Caption() {
  return (
    <div className={styles.caption}>
      <h1 className={styles.title}>
        Продавать <br /> на<span> Alibaba.com</span>
      </h1>
      <div className={styles.box}>
        <ul>
          <li>Показать товары B2B покупателям из <br /> 220 стран и регионов</li>
          <li>Получить международную верификацию компании</li>
          <li>Оцифровать общение с покупателями</li>
        </ul>
        <div >
          <div className={styles.picture} >
        <img src="./images/spiker.webp" alt="spiker" />
          </div>
        </div>  
        {/* <div className={styles.play}>
        <img  src="./images/play.svg" alt="play" />
          </div>  */}
        

    

      </div>
    </div>
  );
}
export default Caption;
