import {Dispatch} from "react";

const GET_CAPTCHA_URL_SUCCESS = 'millionaire/bodyGame/';

type ActonType = any

let initialState = {
    questionBlock: {
        questions: [
            {
                text: "Вопрос №1",
                score: 1000,
                answers: [
                    {
                        text: "Вариант №1",
                        isRight: true
                    },
                    {
                        text: "Вариант №2",
                        isRight: false
                    },
                    {
                        text: "Вариант №3",
                        isRight: false
                    },
                    {
                        text: "Вариант №4",
                        isRight: false
                    },
                ]
            },
            {
                text: "Вопрос №2",
                score: 5000,
                answers: [
                    {
                        text: "Вариант №1",
                        isRight: true
                    },
                    {
                        text: "Вариант №2",
                        isRight: false
                    },
                    {
                        text: "Вариант №3",
                        isRight: false
                    },
                    {
                        text: "Вариант №4",
                        isRight: false
                    },
                ]
            },
            {
                text: "Вопрос №3",
                score: 10000,
                answers: [
                    {
                        text: "Вариант №1",
                        isRight: true
                    },
                    {
                        text: "Вариант №2",
                        isRight: false
                    },
                    {
                        text: "Вариант №3",
                        isRight: false
                    },
                    {
                        text: "Вариант №4",
                        isRight: false
                    },
                ]
            },

        ]
    }
};

const bodyGameReducer = (state = initialState, action: ActonType) => {
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

export default bodyGameReducer;