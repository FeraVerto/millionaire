import {Dispatch} from "react";

const GET_NEXT_QUESTION = 'millionaire/bodyGame/GET_NETX_QUESTION';
const RESET_SCORE = 'millionaire/bodyGame/RESET_SCORE';
const TOGGLE_IS_ACTIVE = 'millionaire/bodyGame/TOGGLE_IS_ACTIVE';

type ActonType = any
type initialStateType = typeof initialState

let initialState = {
    totalScore: 0,
    i: 0,
    questionBlock: {
        isActive: true,
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
                        text: "Вариант №21",
                        isRight: false
                    },
                    {
                        text: "Вариант №22",
                        isRight: true
                    },
                    {
                        text: "Вариант №23",
                        isRight: false
                    },
                    {
                        text: "Вариант №24",
                        isRight: false
                    },
                ]
            },
            {
                text: "Вопрос №3",
                score: 10000,
                answers: [
                    {
                        text: "Вариант №31",
                        isRight: true
                    },
                    {
                        text: "Вариант №32",
                        isRight: false
                    },
                    {
                        text: "Вариант №33",
                        isRight: false
                    },
                    {
                        text: "Вариант №34",
                        isRight: false
                    },
                ]
            },
            {
                text: "Вопрос №4",
                score: 10000,
                answers: [
                    {
                        text: "Вариант №41",
                        isRight: true
                    },
                    {
                        text: "Вариант №42",
                        isRight: false
                    },
                    {
                        text: "Вариант №43",
                        isRight: false
                    },
                    {
                        text: "Вариант №44",
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
                totalScore: 0,
                questionBlock: {
                    ...state.questionBlock,
                    isActive: false
                }
            }

        case TOGGLE_IS_ACTIVE:
            return {
                ...state,
                questionBlock: {
                    ...state.questionBlock,
                    isActive: true
                }
            }

        default:
            return state;
    }
}

export const getNextQuestionAC = () => ({type: GET_NEXT_QUESTION});

export const resetScoreAC = () => ({type: RESET_SCORE});

export const toggleIsActiveAC = () => ({type: TOGGLE_IS_ACTIVE})

/*export const getAuthUserData = () => async (dispatch: Dispatch<ActonType>) => {
    /!*dispatch(setAuthUserData());*!/
}*/

export default bodyGameReducer;


