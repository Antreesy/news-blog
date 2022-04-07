import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { cleanUser } from "../../redux/actions/authActions";
import { openAuth } from "../../redux/actions/modalActions";

import "./authstatus.scss";

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
    <div className="auth">
      <div className="auth__wrapper">
        <p className="auth__userinfo">
          {store.auth.login
            ? `Пользователь: ${store.auth.login}`
            : "Вход не выполнен"}
        </p>
        <button className="button button_primary" onClick={handleClick}>
          {store.auth.login ? `Выйти` : "Войти"}
        </button>
      </div>
    </div>
  );
};

export { AuthStatus };
