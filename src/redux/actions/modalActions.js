import { OPEN_AUTH, CLOSE_AUTH, OPEN_NEWS, CLOSE_NEWS } from "../consts/modal";

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

const openNews = () => {
  return {
    type: OPEN_NEWS,
  };
};

const closeNews = () => {
  return {
    type: CLOSE_NEWS,
  };
};

export { openAuth, closeAuth, openNews, closeNews };
