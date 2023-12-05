import React from "react";
import Content from "../components/Content/Content";
import Sponsors from "../components/Sponsors/Sponsors";
import Container from '../components/Container/Container'
import Info from "../components/Info/Info";
import style from './index.module.scss'
function Main() {
  return (
    <div className={style.main}>
      <Content />
      <Sponsors />
      <Container>
        <Info/>
      </Container>
    </div>
  );
}

export default Main;
