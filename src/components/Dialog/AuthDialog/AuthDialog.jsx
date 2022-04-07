import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextInput } from "../../TextInput/TextInput";

import {
  authUser,
  changeLoginInput,
  changePassInput,
} from "../../../redux/actions/authActions";
import { closeAuth } from "../../../redux/actions/modalActions";

import { userData } from "../../../shared/const";

const AuthDialog = () => {
  const [error, setError] = useState("");
  const store = useSelector((state) => {
    return { auth: state.auth };
  });
  const dispatch = useDispatch();

  const onConfirm = (e) => {
    e.preventDefault();

    if (!store.auth.loginInputValue || !store.auth.passInputValue) {
      setError("Не оставляйте поля пустыми");
      return;
    }

    const authData = userData.find(
      (item) => item.login === store.auth.loginInputValue
    );
    if (!authData || authData.password !== store.auth.passInputValue) {
      setError("Неверный логин или пароль");
      return;
    }

    dispatch(authUser([authData.login, authData.role]));

    dispatch(closeAuth());
  };

  const onAbort = (e) => {
    e.preventDefault();
    dispatch(closeAuth());
  };

  const onChangeLogin = (value) => {
    dispatch(changeLoginInput(value));
  };

  const onChangePassword = (value) => {
    dispatch(changePassInput(value));
  };

  return (
    <div className="dialog__container">
      <h4 className="heading dialog__caption">Вход в систему</h4>

      <form className="dialog__form">
        <TextInput
          className="dialog__textinput"
          label="Логин"
          type="text"
          placeholder="Введите логин"
          value={store.auth.loginInputValue}
          onChange={onChangeLogin}
        />

        <TextInput
          className="dialog__textinput"
          label="Пароль"
          type="password"
          placeholder="Введите пароль"
          value={store.auth.passInputValue}
          onChange={onChangePassword}
        />

        {error && <p className="dialog__text_error">{error}</p>}

        <div className="dialog__button-wrapper">
          <button
            className="button button_primary"
            onClick={onConfirm}
            children="Войти"
          />
          <button
            className="button button_secondary"
            onClick={onAbort}
            children="Отмена"
          />
        </div>
      </form>
    </div>
  );
};

export { AuthDialog };
