import React from "react";
import { useSelector } from "react-redux";

import "./mainpage.scss";

const MainPage = () => {
  const store = useSelector((state) => {
    return { auth: state.auth };
  });

  return (
    <div className="container main__container">
      <h3 className="heading main__heading">Главная страница</h3>
      <h4 className="heading main__caption">
        Привет, {store.auth.login ? store.auth.login : "Гость"}
      </h4>
    </div>
  );
};

export { MainPage };
