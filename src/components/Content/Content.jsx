import React from "react";
import styles from "./Content.module.scss";

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.parent}>
        <div className={styles.box}>
          <h3 className={styles.title}>
            Alibaba.com <br />
            самый быстрый выход на международный рынок
          </h3>
          <div className={styles.items}>
          <div className={styles.item}>
            <img src="./images/globus.webp" alt="globus" loading="lazy" />
            <p>220 стран <br />и регионов <br />мира</p>
          </div>
          <div className={styles.item}>
            <img src="./images/cart.webp" alt="cart" loading="lazy" />
            <p>280 <br />миллионов покупателей</p>
          </div>
          <div className={styles.item}>
            <img src="./images/letter.webp" alt="letter" loading="lazy" />
            <p>400 тысяч <br />запросов <br /> в день</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
