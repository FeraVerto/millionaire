import {Dispatch} from "react";

const GET_NEXT_QUESTION = 'millionaire/bodyGame/GET_NETX_QUESTION';
const RESET_SCORE = 'millionaire/bodyGame/RESET_SCORE';

type ActonType = any
type initialStateType = typeof initialState

let initialState = {
    totalScore: 0,
    i: 0,
    questionBlock: {
        active: true,

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
                        isRight: false
                    },
                    {
                        text: "Вариант №2",
                        isRight: true
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
            {
                text: "Вопрос №4",
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

const bodyGameReducer = (state = initialState, action: ActonType): initialStateType => {
    switch (action.type) {

        case GET_NEXT_QUESTION:
            return {
                ...state,
                i: state.i + 1,
                totalScore: state.totalScore += state.questionBlock.questions[state.i].score
            }

        case RESET_SCORE:
            return {
                ...state,
                i: 0,
                totalScore: 0
            }

        default:
            return state;
    }
}

export const getNextQuestionAC = () => {
    return {type: GET_NEXT_QUESTION}
};

export const resetScoreAC = () => {
    return {type: RESET_SCORE}
};

export const getAuthUserData = () => async (dispatch: Dispatch<ActonType>) => {
    /*dispatch(setAuthUserData());*/
}

export default bodyGameReducer;


