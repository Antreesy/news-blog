import { OPEN_AUTH, CLOSE_AUTH, OPEN_NEWS, CLOSE_NEWS } from "../consts/modal";

const initialState = {
  isAuthOpen: false,
  isNewsOpen: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_AUTH: {
      const isAuthOpen = true;
      return { ...state, isAuthOpen };
    }

    case CLOSE_AUTH: {
      const isAuthOpen = false;
      return { ...state, isAuthOpen };
    }

    case OPEN_NEWS: {
      const isNewsOpen = true;
      return { ...state, isNewsOpen };
    }

    case CLOSE_NEWS: {
      const isNewsOpen = false;
      return { ...state, isNewsOpen };
    }

    default:
      return state;
  }
};
