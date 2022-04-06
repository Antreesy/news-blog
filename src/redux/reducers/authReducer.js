import {AUTH_USER, CLEAN_USER, OPEN_AUTH, CLOSE_AUTH, CHANGE_LOGIN_INPUT, CHANGE_PASS_INPUT} from "../consts/auth";

const initialState = {
    "login": "",
    "userRole": "",
    "isOpen": false,
    "loginInputValue": "text",
    "passInputValue": "pass",  
}

export const authReducer = (state = initialState, action ) => {
    switch (action.type) {

        case AUTH_USER: {
            const [login, userRole] = action.payload
            return {...state, login, userRole};
        }

        case CLEAN_USER: {
            const login = ""
            const userRole = ""
            return {...state, login, userRole};
        }

        case OPEN_AUTH: {
            const isOpen = true
            return {...state, isOpen};
        }

        case CLOSE_AUTH: {
            const isOpen = false
            return {...state, isOpen};
        }

        case CHANGE_LOGIN_INPUT: {
            const loginInputValue = action.payload
            return {...state, loginInputValue};
        }

        case CHANGE_PASS_INPUT: {
            const passInputValue = action.payload
            return {...state, passInputValue};
        }

        default: return state;
    }
}