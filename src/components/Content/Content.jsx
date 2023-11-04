import React from "react";
import styles from "./Content.module.scss";

function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.shape}>
        <div className={styles.box}>
          <h3 className={styles.title}>
            Alibaba.com <br />
            самый быстрый выход на международный рынок
          </h3>
          <div className={styles.items}>
          <div className={styles.item}>
            <img src="./images/globus.svg" alt="globus  " />
            <p>220 стран <br />и регионов <br />мира</p>
          </div>
          <div className={styles.item}>
            <img src="./images/cart.svg" alt="cart" />
            <p>280 <br />миллионов покупателей</p>
          </div>
          <div className={styles.item}>
            <img src="./images/letter.svg" alt="letter" />
            <p>400 тысяч <br />запросов <br /> в день</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Content;
