import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {QuestionsType} from "../../bll/state";
import {getNextQuestionAC, resetScoreAC} from "../../bll/bodyGame-reducer";
import {ButtonWithAnswer} from "./ButtonWithAnswer/ButtonWithAnswer";
import React from "react";
import s from './BodyGame.module.css'

export const BodyGame = () => {

    const questions = useSelector<AppStateType, QuestionsType>((state) => state.bodyGame.questionBlock.questions)
    const i = useSelector<AppStateType, number>((state) => state.bodyGame.i)
    const dispatch = useDispatch()

    let onAnswerOptionClick = (e: any) => {
        if (e.target.dataset.answer === 'true') {
            dispatch(getNextQuestionAC())
        } else {
            dispatch(resetScoreAC())
        }
    }

    let randomColor = () => {
        let arr = ['#cfff00', '#ff03d7', '#fffb00']
        let item = arr[Math.floor(Math.random()*arr.length)];
        return item
    }

    return (
        <div className={s.body_game} style={{ backgroundColor: randomColor()}}>
            {
                i === 15
                    ? <div>победа!</div>
                    : <div>
                        <div className={s.question_text}>
                            {
                                questions[i].text
                            }
                        </div>
                        <div onClick={(e) => onAnswerOptionClick(e)}>
                            {
                                questions[i].answers.map(a => <ButtonWithAnswer className={s.answer}
                                                                                isRight={a.isRight}
                                                                                text={a.text}/>)
                            }
                        </div>
                    </div>
            }
        </div>
    )
}
