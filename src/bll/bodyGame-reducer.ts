const GET_NEXT_QUESTION = 'millionaire/bodyGame/GET_NETX_QUESTION';
const RESET_SCORE = 'millionaire/bodyGame/RESET_SCORE';
const TOGGLE_IS_ACTIVE = 'millionaire/bodyGame/TOGGLE_IS_ACTIVE';

type ActonType = any
type initialStateType = typeof initialState

let initialState = {
    stateScore: [500, 1000, 2000, 3000, 5000, 10000, 15000, 25000, 50000, 100000, 200000, 400000, 800000, 1500000, 3000000],
    totalScore: 0,
    i: 0,
    questionBlock: {
        isActive: true,
        questions: [
            {
                text: "Что такое React?",
                score: 1000,
                answers: [
                    {
                        text: "Библиотека",
                        isRight: true
                    },
                    {
                        text: "Фреймворк",
                        isRight: false
                    },
                    {
                        text: "Обзор Юлика и Кузьмы на чужие ролики",
                        isRight: false
                    },
                    {
                        text: "Что-то из химии",
                        isRight: false
                    },
                ]
            },
            {
                text: "JSX - это... ?",
                score: 5000,
                answers: [
                    {
                        text: "Расширение языка JavaScript",
                        isRight: true
                    },
                    {
                        text: "HTML тэги внутри компонента",
                        isRight: false
                    },
                    {
                        text: "Расширение файла",
                        isRight: false
                    },
                    {
                        text: "Библиотека для создания тэгов внутри JS",
                        isRight: false
                    },
                ]
            },
            {
                text: "Функция, которая удовлетворяет условиям: при одном и том же наборе аргументов возвращается " +
                    "один и тот же результат и отсутствуют побочные эффекты, является... ",
                score: 10000,
                answers: [
                    {
                        text: "Предсказуемой",
                        isRight: true
                    },
                    {
                        text: "Непереиспользуемой",
                        isRight: false
                    },
                    {
                        text: "Чистой",
                        isRight: false
                    },
                    {
                        text: "Мутирующей",
                        isRight: false
                    },
                ]
            },
            {
                text: "Какой DOM создает React",
                score: 10000,
                answers: [
                    {
                        text: "New",
                        isRight: true
                    },
                    {
                        text: "Virtual",
                        isRight: false
                    },
                    {
                        text: "Standard",
                        isRight: false
                    },
                    {
                        text: "Unknown",
                        isRight: false
                    },
                ]
            },
            {
                text: "Что такое React?",
                score: 1000,
                answers: [
                    {
                        text: "Библиотека",
                        isRight: true
                    },
                    {
                        text: "Фреймворк",
                        isRight: false
                    },
                    {
                        text: "Обзор Юлика и Кузьмы на чужие ролики",
                        isRight: false
                    },
                    {
                        text: "Что-то из химии",
                        isRight: false
                    },
                ]
            },
            {
                text: "JSX - это... ?",
                score: 5000,
                answers: [
                    {
                        text: "Расширение языка JavaScript",
                        isRight: true
                    },
                    {
                        text: "HTML тэги внутри компонента",
                        isRight: false
                    },
                    {
                        text: "Расширение файла",
                        isRight: false
                    },
                    {
                        text: "Библиотека для создания тэгов внутри JS",
                        isRight: false
                    },
                ]
            },
            {
                text: "Функция, которая удовлетворяет условиям: при одном и том же наборе аргументов возвращается " +
                    "один и тот же результат и отсутствуют побочные эффекты, является... ",
                score: 10000,
                answers: [
                    {
                        text: "Предсказуемой",
                        isRight: true
                    },
                    {
                        text: "Непереиспользуемой",
                        isRight: false
                    },
                    {
                        text: "Чистой",
                        isRight: false
                    },
                    {
                        text: "Мутирующей",
                        isRight: false
                    },
                ]
            },
            {
                text: "Какой DOM создает React",
                score: 10000,
                answers: [
                    {
                        text: "New",
                        isRight: true
                    },
                    {
                        text: "Virtual",
                        isRight: false
                    },
                    {
                        text: "Standard",
                        isRight: false
                    },
                    {
                        text: "Unknown",
                        isRight: false
                    },
                ]
            },
            {
                text: "Что такое React?",
                score: 1000,
                answers: [
                    {
                        text: "Библиотека",
                        isRight: true
                    },
                    {
                        text: "Фреймворк",
                        isRight: false
                    },
                    {
                        text: "Обзор Юлика и Кузьмы на чужие ролики",
                        isRight: false
                    },
                    {
                        text: "Что-то из химии",
                        isRight: false
                    },
                ]
            },
            {
                text: "JSX - это... ?",
                score: 5000,
                answers: [
                    {
                        text: "Расширение языка JavaScript",
                        isRight: true
                    },
                    {
                        text: "HTML тэги внутри компонента",
                        isRight: false
                    },
                    {
                        text: "Расширение файла",
                        isRight: false
                    },
                    {
                        text: "Библиотека для создания тэгов внутри JS",
                        isRight: false
                    },
                ]
            },
            {
                text: "Функция, которая удовлетворяет условиям: при одном и том же наборе аргументов возвращается " +
                    "один и тот же результат и отсутствуют побочные эффекты, является... ",
                score: 10000,
                answers: [
                    {
                        text: "Предсказуемой",
                        isRight: true
                    },
                    {
                        text: "Непереиспользуемой",
                        isRight: false
                    },
                    {
                        text: "Чистой",
                        isRight: false
                    },
                    {
                        text: "Мутирующей",
                        isRight: false
                    },
                ]
            },
            {
                text: "Какой DOM создает React",
                score: 10000,
                answers: [
                    {
                        text: "New",
                        isRight: true
                    },
                    {
                        text: "Virtual",
                        isRight: false
                    },
                    {
                        text: "Standard",
                        isRight: false
                    },
                    {
                        text: "Unknown",
                        isRight: false
                    },
                ]
            },
            {
                text: "Что такое React?",
                score: 1000,
                answers: [
                    {
                        text: "Библиотека",
                        isRight: true
                    },
                    {
                        text: "Фреймворк",
                        isRight: false
                    },
                    {
                        text: "Обзор Юлика и Кузьмы на чужие ролики",
                        isRight: false
                    },
                    {
                        text: "Что-то из химии",
                        isRight: false
                    },
                ]
            },
            {
                text: "JSX - это... ?",
                score: 5000,
                answers: [
                    {
                        text: "Расширение языка JavaScript",
                        isRight: true
                    },
                    {
                        text: "HTML тэги внутри компонента",
                        isRight: false
                    },
                    {
                        text: "Расширение файла",
                        isRight: false
                    },
                    {
                        text: "Библиотека для создания тэгов внутри JS",
                        isRight: false
                    },
                ]
            },
            {
                text: "Функция, которая удовлетворяет условиям: при одном и том же наборе аргументов возвращается " +
                    "один и тот же результат и отсутствуют побочные эффекты, является... ",
                score: 10000,
                answers: [
                    {
                        text: "Предсказуемой",
                        isRight: true
                    },
                    {
                        text: "Непереиспользуемой",
                        isRight: false
                    },
                    {
                        text: "Чистой",
                        isRight: false
                    },
                    {
                        text: "Мутирующей",
                        isRight: false
                    },
                ]
            }
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

export default bodyGameReducer;


