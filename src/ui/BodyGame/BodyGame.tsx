import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import {AnswersType, QuestionsType, QuestionType, StateType, VariantType} from "../../bll/state";
import {getNextQuestionAC} from "../../bll/bodyGame-reducer";
import {useEffect} from "react";

export const BodyGame = () => {

    const questions = useSelector<AppStateType, QuestionsType>((state) => state.bodyGame.questionBlock.questions)
    /*
        const answers = useSelector<QuestionsType, AnswersType>((state) => state.map(m => m))
    */
    const questionsText = useSelector<AppStateType, QuestionsType>((state) => state.bodyGame.questionBlock.questions)
    const i = useSelector<AppStateType, number>((state) => state.bodyGame.i)
    const dispatch = useDispatch()

    let onAnswerOptionClick = (e: any) => {
        if (e.target.dataset.answer === 'true') {
            dispatch(getNextQuestionAC())
        }
    }

    return (
        <div>
            <div>{
                questions[i].text
            }</div>
            <div onClick={(e) => onAnswerOptionClick(e)}>
                <button data-answer={String(questions[i].answers[0].isRight)}>Вариант 1</button>
                <button data-answer={questions[i].answers[1].isRight}>Вариант 2</button>
                <button data-answer={questions[i].answers[2].isRight}>Вариант 3</button>
                <button data-answer={questions[i].answers[3].isRight}>Вариант 4</button>
            </div>
        </div>
    )
}
