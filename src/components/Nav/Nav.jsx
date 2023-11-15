import React from 'react'
import styles from './Nav.module.scss'

function Nav() {
    return(
        <div className={styles.nav}>
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
        </div>
    );
};

export default Nav