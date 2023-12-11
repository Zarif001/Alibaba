  import React, { useState } from 'react';
  import { useTranslation } from 'react-i18next';
  import styles from './Nav.module.scss';

  function Nav() {
      const { i18n } = useTranslation();
      const [showOptions, setShowOptions] = useState(false);
    
      const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowOptions(false);
      };
      return(
          <div className={styles.nav}>
            <div className={styles.navCaption}>
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
              <div>
                  <button className={styles.button}>GOLD SUPPLIER</button>
                  <button className={styles.button}>VERIFIED SUPPLIER</button>
              </div>
                          <div className={styles.contact}>
                  <a href="/">
                      <img className={styles.icons} src="./images/tg.png" alt="telegram" />
                  </a>
                  <a href="/">
                      <img className={styles.icons} src="./images/wa.png" alt="whatsapp" />
                  </a>
                  <a href="/">
                      <img className={styles.icons} src="./images/call.png" alt="call-button" />
                  </a>
                  <div className={styles.customSelect}>
            <button className={styles.selectButton} onClick={() => setShowOptions(!showOptions)}>
              <img src={`./images/${i18n.language}.png`} alt={i18n.language} />
            </button>
            {showOptions && (
              <div className={styles.selectOptions}>
                <img
                  src="./images/ru.png"
                  alt="russia"
                  onClick={() => changeLanguage('ru')}
                  className={i18n.language === 'ru' ? styles.selectedLanguage : ''}
                />
                <img
                  src="./images/uz.png"
                  alt="uzbekistan"
                  onClick={() => changeLanguage('uz')}
                  className={i18n.language === 'uz' ? styles.selectedLanguage : ''}
                />
                    </div>
            )}
          </div>
          </div>
              </div>
          </div>
      );
  };

  export default Nav