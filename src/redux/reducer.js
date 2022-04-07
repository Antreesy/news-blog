import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { newsReducer } from "./reducers/newsReducer";
import { modalReducer } from "./reducers/modalReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
  modal: modalReducer,
});
