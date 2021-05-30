import React from 'react'

type variantType = {
    text: string,
    isRight: boolean
}

type answersType = Array<variantType>

type questionType = {
    text: string,
    score: number,
    answers: answersType
}
type questionsType = Array<questionType>

type StateType = {
    totalScore: number,
    questionBlock: {
        questions: questionsType
    }
}

export let state: StateType = {
    totalScore: 0,
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
}

/*
-20 => -20
-32 => -23
0 => 0
10 => 10
29394 => 23499
* */

/*if (n === 0) newN.splice(i, 1)*/

/*
function minPermutation(n) {
    let arrarrarr = []
    let str = String(n)
    let newN = str.split('')

    let newArr = newN.map((n, i) => +n)

    newArr[0] =

    let newnewN =  newN.sort((n, m) => {
        if (n < m) {
            return -1
        }
        if (n > m) {
            return 1
        }
        return 0
    })

    return Number(newnewN.join(''))
}

minPermutation(29394)*/
