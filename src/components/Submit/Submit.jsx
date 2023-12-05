import React from "react";
import styles from "./Submit.module.scss";
import { useState } from "react";
import axios from "axios";

function Submit({closeModal}) {
  const [messageFormData, setMessageFormData] = useState({
    name: "",
    number: "",
    email: "",
    comment: "",
  });

  const [successMessages, setSuccessMessages] = useState(["", ""]);
  const TOKEN = "6600099198:AAGyTwqp7-CMqscwdtXoQC_FvMIXr0TfEP8";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const CHAT_ID = "-4044044095";

  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    if (
      !messageFormData.name ||
      !messageFormData.email ||
      !messageFormData.number 
    ) {
      setSuccessMessages(["Заполните все обязательные поля", ""]);
      return;
    }
    const { name, number, email, comment } = messageFormData;

    const message =
      `<b>Заявка с сайта(Alibaba)</b>\n` +
      `<b>Отправитель: </b> ${name}\n` +
      `<b>Номер: </b> ${number}\n` +
      `<b>Почта: </b> ${email}\n` +
      `<b>Комментарий: </b> ${comment}\n`;

    try {
      const response = await axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      });

      setMessageFormData({
        name: "",
        number: "",
        email: "",
        comment: "",
      });

      setSuccessMessages(["", "Сообщение успешно отправлено"]);
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <div className={styles.submit}>
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
            <div className={styles.navBox}>
                <img className={styles.img} src="./images/logo.webp" alt="logo" loading="lazy" />
                <div className={styles.line}></div>
                <ul className={styles.links}>
                    <li>Global</li>
                    <li>Service</li>   
                    <li>Parther</li>
                </ul>
                <div className={styles.line}></div>
                <img className={styles.img}  src="./images/logo2.webp" alt="logo2" loading="lazy"/>
            </div>
            <img className={styles.close} onClick={closeModal} src="./images/close.svg" alt="close" />
          <form className={styles.form}>
            <h6>Ваше имя <span>*</span></h6>
            <input
              type="text"
              placeholder="Как к вам обращаться?"
              value={messageFormData.name}
              onChange={(e) =>
                setMessageFormData({ ...messageFormData, name: e.target.value })
              }
              className={styles.nameInput}
              required
            />
            <h6>Ваша почта<span>*</span></h6>
            <input
              type="text"
              placeholder="Введите вашу почту"
              value={messageFormData.email}
              onChange={(e) =>
                setMessageFormData({
                  ...messageFormData,
                  email: e.target.value,
                })
              }
              className={styles.nameInput}
              required
            />
            <h6>Номер телефона<span>*</span></h6>
            <input
              type="number"
              placeholder="Введите ваш номер телефона"
              value={messageFormData.number}
              onChange={(e) =>
                setMessageFormData({
                  ...messageFormData,
                  number: e.target.value,
                })
              }
              className={styles.nameInput}
              required
            />
            <h6>Комментарий</h6>
            <input
              type="text"
              placeholder="Когда с вами удобнее связаться?"
              value={messageFormData.comment}
              onChange={(e) =>
                setMessageFormData({
                  ...messageFormData,
                  comment: e.target.value,
                })
              }
              className={styles.nameInput}
            />
            <button
            
              type="submit"
              className={styles.button}
              onClick={handleMessageSubmit}
            >
              Send Message
            </button>
            <p
              className={
                successMessages[1]
                  ? styles.alert
                  : successMessages[0]
                  ? styles.error
                  : ""
              }
            >
              {successMessages[1] || successMessages[0]}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Submit;
