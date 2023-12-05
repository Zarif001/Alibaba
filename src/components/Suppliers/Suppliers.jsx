import React from "react";
import { useState } from "react";
import styles from "./Suppliers.module.scss";
import Submit from "../Submit/Submit";

function Suppliers() {

  const [modal, setModal] = useState(false)

  const openModal = () =>{
    setModal(true)
  }
  const closeModal = () =>{
    setModal(false)
  }

  return (
    <div className={styles.suplliers}>
      <div className={styles.supplier}>
        <div className={styles.textTitle}>
        <h2 className={styles.title}>Тарифы</h2>
        </div>
        <div className={styles.items}>
          <div className={styles.caption}>
            <div className={styles.forTitle}>
              <h4>Для малого бизнеса</h4>
            </div>
            <div className={styles.leftBox}>
              <div className={styles.picture}>
                <img src="./images/goldsupllier.webp" alt="goldsupllier" />
                <h5>Gold Supplier</h5>
              </div>
              <div className={styles.line}></div>
              <button>от 2999 USD в год</button>
            </div>
          </div>
          <div className={styles.caption}>
            <div className={styles.forTitle}>
              <h4>Для средних и крупных производителей</h4>
            </div>
            <div className={styles.leftBox}>
              <div className={styles.picture}>
                <img src="./images/verified.png" alt="verified" />
                <h5>Verified Supplier</h5>
              </div>
              <div className={styles.line}></div>
              <button>от 7999 USD в год</button>
            </div>
          </div>
        </div>
        <div className={styles.last}>
          <button className={styles.modalB} onClick={openModal}>Зарегистрировать пробный аккаунт</button>
        </div>
        {
            modal && (
              <Submit closeModal={closeModal}  />
            )
          }
      </div>
    </div>
  );
}
export default Suppliers;
