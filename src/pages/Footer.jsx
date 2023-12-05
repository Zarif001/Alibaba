import React from "react";
import Container from "../components/Container/Container";
import Suppliers from "../components/Suppliers/Suppliers";
import styles from './index.module.scss'
function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <Suppliers />
      </Container>
    </div>
  );
}
export default Footer;
