import {
  APPROVE_NEWS,
  DELETE_NEWS,
  CREATE_NEWS,
  CHANGE_CAPTION,
  CHANGE_TEXT,
  CLEAR_DIALOG,
  CHANGE_FILTER,
} from "../consts/news";

const approveNews = (id) => {
  return {
    type: APPROVE_NEWS,
    payload: id,
  };
};

const deleteNews = (id) => {
  return {
    type: DELETE_NEWS,
    payload: id,
  };
};

const createNews = (id) => {
  return {
    type: CREATE_NEWS,
    payload: id,
  };
};

const changeCaptionInput = (value) => {
  return {
    type: CHANGE_CAPTION,
    payload: value,
  };
};

const changeTextInput = (value) => {
  return {
    type: CHANGE_TEXT,
    payload: value,
  };
};

const changeFilterInput = (value) => {
  return {
    type: CHANGE_FILTER,
    payload: value,
  };
};

const clearDialog = () => {
  return {
    type: CLEAR_DIALOG,
  };
};

export {
  approveNews,
  deleteNews,
  createNews,
  changeCaptionInput,
  changeTextInput,
  clearDialog,
  changeFilterInput,
};
