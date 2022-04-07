import {
  AUTH_USER,
  CLEAN_USER,
  CHANGE_LOGIN_INPUT,
  CHANGE_PASS_INPUT,
} from "../consts/auth";

const initialState = {
  login: "",
  userRole: "",
  loginInputValue: "",
  passInputValue: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER: {
      const [login, userRole] = action.payload;
      return { ...state, login, userRole };
    }

    case CLEAN_USER: {
      const login = "";
      const userRole = "";
      return { ...state, login, userRole };
    }

    case CHANGE_LOGIN_INPUT: {
      const loginInputValue = action.payload;
      return { ...state, loginInputValue };
    }

    case CHANGE_PASS_INPUT: {
      const passInputValue = action.payload;
      return { ...state, passInputValue };
    }

    default:
      return state;
  }
};
