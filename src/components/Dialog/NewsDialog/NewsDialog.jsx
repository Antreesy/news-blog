import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";

import { TextInput } from "../../TextInput/TextInput";

import {
  changeCaptionInput,
  changeTextInput,
  clearDialog,
  createNews,
} from "../../../redux/actions/newsActions";
import { closeNews } from "../../../redux/actions/modalActions";

const NewsDialog = () => {
  const [error, setError] = useState("");
  const store = useSelector((state) => {
    return { news: state.news };
  });
  const dispatch = useDispatch();

  const onConfirm = (e) => {
    e.preventDefault();

    if (!store.news.captionInputValue || !store.news.textInputValue) {
      setError("Не оставляйте поля пустыми");
      return;
    }

    dispatch(
      createNews({
        caption: store.news.captionInputValue,
        description: store.news.textInputValue,
        date: new Date().toLocaleDateString("ru"),
      })
    );
    dispatch(clearDialog());
    dispatch(closeNews());
  };

  const onAbort = (e) => {
    e.preventDefault();
    dispatch(clearDialog());
    dispatch(closeNews());
  };

  const onChangeCaption = (value) => {
    dispatch(changeCaptionInput(value));
  };

  const onChangeText = (value) => {
    dispatch(changeTextInput(value));
  };

  return (
    <div className="dialog__container">
      <h4 className="dialog__caption">Создание новости</h4>

      <form className="dialog__form">
        <TextInput
          className="dialog__textinput dialog__textinput_long"
          label="Заголовок"
          type="text"
          placeholder="Введите заголовок"
          value={store.news.captionInputValue}
          onChange={onChangeCaption}
        />

        <TextInput
          className="dialog__textinput dialog__textinput_long"
          label="Текст"
          type="textarea"
          placeholder="Введите текст"
          value={store.news.textInputValue}
          onChange={onChangeText}
        />

        {error && <p className="dialog__text_error">{error}</p>}

        <div className="dialog__button-wrapper dialog__button-wrapper_end">
          <button
            className="button button_primary"
            onClick={onConfirm}
            children="Опубликовать"
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

export { NewsDialog };
