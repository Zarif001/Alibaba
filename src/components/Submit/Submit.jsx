import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Submit.module.scss";
import { useTranslation } from "react-i18next";


function Submit({ closeModal }) {
  const {t} = useTranslation('content')
  const [messageFormData, setMessageFormData] = useState({
    name: "",
    number: "",
    email: "",
    comment: "",
  });

  const [successMessages, setSuccessMessages] = useState(["", ""]);

  useEffect(() => {
    window.roistatVisitCallback = function (visitId) {
      window.addEventListener("b24:form:init", (event) => {
        let form = event.detail.object;
        form.setProperty("roistatID", visitId);
        form.setProperty("promotion", "trial account");
      });
      (function (w, d, u) {
        var s = d.createElement("script");
        s.async = true;
        s.src = u + "?" + (Date.now() / 180000 | 0);
        var h = d.getElementsByTagName("script")[0];
        h.parentNode.insertBefore(s, h);
      })(window, document, "https://cdn-ru.bitrix24.ru/b20141368/crm/form/loader_126.js");
    };
  }, []);

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

    const formData = new FormData();
    formData.append("FIELDS[TITLE]", `Новая заявка от ${name}`);
    formData.append("FIELDS[NAME]", name);
    formData.append("FIELDS[PHONE][0][VALUE]", number);
    formData.append("FIELDS[EMAIL][0][VALUE]", email);
    formData.append("FIELDS[COMMENTS]", comment);

    try {
      const response = await axios.post(
        "https://ваш_битрикс24.ru/rest/1/ваш_код_авторизации/crm.lead.add.json",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessageFormData({
        name: "",
        number: "",
        email: "",
        comment: "",
      });

      setSuccessMessages(["", "Заявка успешно отправлена"]);
    } catch (error) {
      console.warn(error);
      setSuccessMessages(["Произошла ошибка при отправке заявки", ""]);
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
            <h6>{t('subTitle')} <span>*</span></h6>
            <input
              type="text"
              placeholder={t('subItem')}
              value={messageFormData.name}
              onChange={(e) =>
                setMessageFormData({ ...messageFormData, name: e.target.value })
              }
              className={styles.nameInput}
              required
            />
            <h6>{t('subTitle2')}<span>*</span></h6>
            <input
              type="text"
              placeholder={t('subItem2')}
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
            <h6>{t('subTitle3')}<span>*</span></h6>
            <input
              type="number"
              placeholder={t('subItem3')}
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
            <h6>{t('subTitle4')}</h6>
            <input
              type="text"
              placeholder={t('subItem4')}
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
              {t('subButton')}
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

