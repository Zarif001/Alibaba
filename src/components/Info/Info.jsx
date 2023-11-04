import React from "react";
import styles from "./Info.module.scss";
function Info() {
  return (
    <div className={styles.info}>
      <h2 className={styles.title}>
        Что получает <br />
        компания при размещении <br /> на <span>Alibaba.com </span>
      </h2>

      <div className={styles.items}>
        <div className={styles.item}>
          <span>1</span>
          <p>
            Собственный онлайн магазин для зарубежных B2B покупателей, который
            имеет версии для ПК и мобильных устройств
          </p>
        </div>
        <div className={styles.item}>
          <span>2</span>
          <p>Доверие покупателей <br />за счет бизнес <br /> верификации <br />продавцов</p>
        </div>
        <div className={styles.item}>
          <span>3</span>
          <p>
            Оцифрованную информацию о своей компании и товарный каталог на 18
            языках
          </p>
        </div>
        <div className={styles.item}>
          <span>4</span>
          <p>
            Возможность участия в международных онлайн выставках и прямых эфирах
            с покупателями
          </p>
        </div>
        <div className={styles.item}>
          <span>5</span>
          <p>
            Личный кабинет с глубокой аналитикой данных и возможностью создавать
            до пяти субаккаунтов для разных сотрудников
          </p>
        </div>
        <div className={styles.item}>
          <span>6</span>
          <p>Сервисную <br />поддержку и <br />сопровождение на <br />русском языке</p>
        </div>
      </div>
    </div>
  );
}
export default Info;
