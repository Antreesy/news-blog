import React from "react";
import { useSelector } from "react-redux";

import c from "./mainpage.module.scss"

const MainPage = () => {
  const store = useSelector((state) => {return {auth: state.auth}})

  return (
  <div className={c.main_page}>
      <h3 className={c.caption}>
        Главная страница
      </h3>
      <h3 className={c.welcome}>
        Привет, {store.auth.login ? store.auth.login : 'Гость' } 
      </h3>
  </div> 
  );
}

export {MainPage};