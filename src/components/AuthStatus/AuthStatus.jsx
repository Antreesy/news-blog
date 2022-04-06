import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { cleanUser, openAuth } from "../../redux/actions/authActions";

import c from "./authstatus.module.scss";

const AuthStatus = () => {
  const dispatch = useDispatch();

  const store = useSelector((state) => {
    return { auth: state.auth };
  });

  const handleClick = () => {
    if (!store.auth.login) {
      dispatch(openAuth());
    } else {
      dispatch(cleanUser());
    }
  };

  return (
    <div className={c.flexWrapper}>
      <p className={c.user}>
        {store.auth.login
          ? `Пользователь: ${store.auth.login}`
          : "Вход не выполнен"}
      </p>
      <button className={c.link} onClick={handleClick}>
        {store.auth.login ? `Выйти` : "Войти"}
      </button>
    </div>
  );
};

export { AuthStatus };
