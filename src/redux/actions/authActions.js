import {
  AUTH_USER,
  CLEAN_USER,
  OPEN_AUTH,
  CLOSE_AUTH,
  CHANGE_LOGIN_INPUT,
  CHANGE_PASS_INPUT,
} from "../consts/auth";

const authUser = (value) => {
  return {
    type: AUTH_USER,
    payload: value,
  };
};

const cleanUser = () => {
  return {
    type: CLEAN_USER,
  };
};

const openAuth = () => {
  return {
    type: OPEN_AUTH,
  };
};

const closeAuth = () => {
  return {
    type: CLOSE_AUTH,
  };
};

const changeLoginInput = (value) => {
  return {
    type: CHANGE_LOGIN_INPUT,
    payload: value,
  };
};

const changePassInput = (value) => {
  return {
    type: CHANGE_PASS_INPUT,
    payload: value,
  };
};

export {
  authUser,
  cleanUser,
  openAuth,
  closeAuth,
  changeLoginInput,
  changePassInput,
};
