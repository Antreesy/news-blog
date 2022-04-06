import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

// import { TextInput } from "../../Components/TextInput";
// import { Loader } from "../../Components/Loader";

// import Server from "../../api/Server";

// import { RootState } from "../../redux/reducer";
// import {
//   onChangeMainPagePasswordNew,
//   onChangeMainPagePasswordOld,
//   onChangeMainPagePasswordRepeat,
//   onClearMainPageForm,
// } from "../../redux/actions/formActions";
// import { eraseUser } from "../../redux/actions/authActions";
// import { onChangeMsg } from "../../redux/actions/toastActions";

import c from "./mainpage.module.scss"

const MainPage = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState('');
  const store = useSelector((state) => {return {auth: state.auth}})
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    // Server.checkCorrectPassword(store.auth.auth_token, store.form.mainPage_password_old).then((resolve) => {
    //   if (!resolve) {
    //     setError("Старый пароль введен неверно")
    //     return;
    //   }

    //   if (store.form.mainPage_password_new !== store.form.mainPage_password_repeat) {
    //     setError("Пароли не совпадают")
    //     return;
    //   }

    //   Server.changePassword(store.auth.auth_token, store.form.mainPage_password_new);
    //   dispatch(eraseUser())
    //   dispatch(onChangeMsg("Смена пароля успешна. Авторизуйтесь повторно"))
    //   // Cookies.remove("auth_token")
    //   navigate("/login")
    // })
  }

  return (
  <div className={c.main_page}>
      <h3 className={c.caption}>
        Главная страница
      </h3>
      <h3 className={c.welcome}>
        Привет, {store.auth.login} 
      </h3>
      <h3 className={c.welcome}>
        Твоя роль: {store.auth.userRole} 
      </h3>
  </div> 
  );
}

export {MainPage};