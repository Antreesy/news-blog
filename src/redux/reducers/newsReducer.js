import {
  APPROVE_NEWS,
  DELETE_NEWS,
  CREATE_NEWS,
  CHANGE_CAPTION,
  CHANGE_TEXT,
  CLEAR_DIALOG,
  CHANGE_FILTER,
} from "../consts/news";

import { newsApproved, newsCreated } from "../../shared/const";

const initialState = {
  newsApproved: newsApproved,
  newsCreated: newsCreated,
  captionInputValue: "",
  textInputValue: "",
  filterInputValue: "",
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPROVE_NEWS: {
      const idToApprove = action.payload;
      const news = state.newsCreated.find((item) => item.id === idToApprove);
      const newsCreated = state.newsCreated.filter(
        (item) => item.id !== idToApprove
      );
      const newsApproved = [...state.newsApproved, news];

      return { ...state, newsApproved, newsCreated };
    }

    case CREATE_NEWS: {
      const newId =
        Math.max(
          ...state.newsApproved.map((item) => Number(item.id)),
          ...state.newsCreated.map((item) => Number(item.id))
        ) + 1;
      const newsToCreate = { ...action.payload, id: newId };
      const newsCreated = [...state.newsCreated, newsToCreate];

      return { ...state, newsCreated };
    }

    case DELETE_NEWS: {
      const idToDelete = action.payload;
      const newsCreated = state.newsCreated.filter(
        (item) => item.id !== idToDelete
      );
      const newsApproved = state.newsApproved.filter(
        (item) => item.id !== idToDelete
      );

      return { ...state, newsApproved, newsCreated };
    }

    case CHANGE_CAPTION: {
      const captionInputValue = action.payload;
      return { ...state, captionInputValue };
    }

    case CHANGE_TEXT: {
      const textInputValue = action.payload;
      return { ...state, textInputValue };
    }

    case CHANGE_FILTER: {
      const filterInputValue = action.payload;
      return { ...state, filterInputValue };
    }

    case CLEAR_DIALOG: {
      const textInputValue = "";
      const captionInputValue = "";
      return { ...state, textInputValue, captionInputValue };
    }

    default:
      return state;
  }
};
