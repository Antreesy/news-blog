import { useDispatch, useSelector } from "react-redux";
import c from "./authdialog.module.scss"
import React from "react";
import { TextInput } from "../../TextInput/TextInput";
import { authUser, changeLoginInput, changePassInput, closeAuth } from "../../../redux/actions/authActions";
import { userData } from "../../../shared/const"

const AuthDialog = () => {
  const store = useSelector((state) => {return {auth: state.auth}})
  const dispatch = useDispatch()
 
  const onConfirm = (e) => {
    e.preventDefault()

    const authData = userData.find(item => item.login === store.auth.loginInputValue)
    if (!authData) {
        console.log('Нет такого пользователя')
        return;
    }

    if (authData.password !== store.auth.passInputValue) {
        console.log('Неверный пароль')
        return;
    }

    dispatch(authUser([authData.login, authData.role]))

    dispatch(closeAuth())
  }

  const onAbort = (e) => {
    e.preventDefault()
    dispatch(closeAuth())
  }

  const onChangeLogin = (value) => {
    dispatch(changeLoginInput(value))
  }

  const onChangePassword = (value) => {
    dispatch(changePassInput(value))
  }

  return (
    <div className={c.wrapper}>
      <h4 className={c.caption}>Вход в систему</h4>

      <form className={c.form}>
        <TextInput
          label="Логин"
          type="text"
          placeholder="Введите логин"
          value={store.auth.loginInputValue}
          onChange={onChangeLogin}
          validateRules={['required']}
        />

        <TextInput
          label="Пароль"
          type="password"
          placeholder="Введите пароль"
          value={store.auth.passInputValue}
          onChange={onChangePassword}
          validateRules={['password']}
        />

        <button
          className={c.confirm_button}
          onClick={onConfirm}
          children="Войти"
        />
        <button
          className={c.cancel_button}
          onClick={onAbort}
          children="Отмена"
        />
      </form>
    </div>
  )
}

export {AuthDialog};
