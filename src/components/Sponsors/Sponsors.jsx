import React from "react";
import styles from "./Sponsors.module.scss";
function Sponsors() {
  return (
    <div className={styles.sponsors}>
      <div className={styles.box}>
        <div className={styles.items}>
          <img src="./images/similarweb.webp" alt="similarweb" />
          <p>Alibaba.com ранжируется как B2B площадка No.1 в мире</p>
        </div>
        <div className={styles.items}>
          <img src="./images/forbes.webp" alt="forbes" />
          <p>
            Forbes номинировал Alibaba.com как “Лучший B2B вебсайт в мире” 8 раз
          </p>
        </div>
        <div className={styles.items}>
          <img src="./images/facebook.webp" alt="facebook" />
          <p>Профиль Alibaba.com имеет более 26 миллионов подписчиков</p>
        </div>
        <div className={styles.items}>
          <img src="./images/google-play.webp" alt="google-play" />
          <p>Более 100 миллионов скачиваний</p>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
