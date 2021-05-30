import {Dispatch} from "react";

const GET_CAPTCHA_URL_SUCCESS = 'millionaire/Navbar/';

type ActonType = any

let initialState = {
    totalScore: 0
};

const navbarReducer = (state = initialState, action: ActonType) => {
    switch (action.type) {

        case GET_CAPTCHA_URL_SUCCESS: {
            return {}
        }

        default:
            return state;
    }
}

export const setAuthUserData = () => ({});

export const getAuthUserData = () => async (dispatch: Dispatch<ActonType>) => {
    dispatch(setAuthUserData());
}

export default navbarReducer;