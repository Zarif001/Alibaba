import React, { useEffect } from "react";
import styles from "./Submit.module.scss";


function Submit({ closeModal }) {
  useEffect(() => {
     window.roistatVisitCallback = function (visitId) {
      window.addEventListener('b24:form:init', (event) => {
        let form = event.detail.object;
        form.setProperty("roistatID", visitId);
        form.setProperty("promotion", "trial account");
        
      });


      (function (w, d, u) {
        var s = d.createElement('script');
        s.async = true;
        s.src = u + '?' + (Date.now() / 180000 | 0);
        var h = d.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s, h);
      })(window, document, 'https://cdn-ru.bitrix24.ru/b20141368/crm/form/loader_126.js');

      window.roistatVisitCallback();
    }
  })
   
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
            <script data-b24-form="click/126/w8kvl2" data-skip-moving="true">

</script>

        </div>
      </div>
    </div>
  );

  }


export default Submit;


