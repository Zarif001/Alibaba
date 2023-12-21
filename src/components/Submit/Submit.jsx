import React, { useEffect } from "react";
import styles from "./Submit.module.scss";

function Submit({ closeModal }) {
  useEffect(() => {
    window.roistatVisitCallback = function (visitId) {
      window.addEventListener('b24:form:init', (event) => {
        let form = event.detail.object;
        form.setFields({
          "roistatID": visitId,
          "promotion": "trial account"
        });
      });

      (function (w, d, u) {
        var s = d.createElement('script');
        s.async = true;
        s.src = u + '?' + (Date.now() / 180000 | 0);
        var h = d.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s, h);
      })(window, document, 'https://cdn-ru.bitrix24.ru/b27952308/crm/form/loader_3.js');

      window.roistatVisitCallback();
    };
  }, [closeModal]);

  return (
    <div className={styles.submit}>
      <div className={styles.modalOverlay} onClick={closeModal}>
        <div className={styles.modal}>

          {/* ваша форма  */}

        <script data-b24-form="click/126/w8kvl2" data-skip-moving="true">
  {
    window.roistatVisitCallback = function (visitId) {
        window.addEventListener('b24:form:init', (event) => {
            let form = event.detail.object;
            form.setProperty("roistatID", visitId);
            form.setProperty("promotion", );
        });
        (function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b20141368/crm/form/loader_126.js');
    }
  }
</script>






        </div>
      </div>
    </div>
  );
}

export default Submit;


