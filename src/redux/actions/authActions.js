import {GET_ROLE, GET_LOGIN, CLEAN_USER} from "../consts/auth";

const getRole = (value) => {
   return {
        type: GET_ROLE,
        payload: value,
    }
};

const getLogin = (value) => {
    return {
        type: GET_LOGIN,
        payload: value,
    }
};

const cleanUser = () => {
    return {
        type: CLEAN_USER,
    }
};


export {getRole, getLogin, cleanUser}