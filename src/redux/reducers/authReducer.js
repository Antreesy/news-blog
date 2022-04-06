import {GET_ROLE, GET_LOGIN, CLEAN_USER} from "../consts/auth";

const initialState = {
    "login": "login",
    "userRole": "role",
}


export const authReducer = (state = initialState, action ) => {
    switch (action.type) {

        case GET_ROLE: {
            const userRole = action.payload
            return {...state, userRole};
        }

        case GET_LOGIN: {
            const login = action.payload
            return {...state, login};
        }

        case CLEAN_USER: {
            const login = ""
            const userRole = ""
            return {...state, login, userRole};
        }

        default: return state;
    }
}