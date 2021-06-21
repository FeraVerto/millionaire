import s from './ButtonWithAnswer.module.css'
import {randomColor} from "../../../utils/randomColor";

type ButtonType = {
    isRight: boolean | string,
    text: string
}

export const ButtonWithAnswer = ({isRight, text}: ButtonType) => {

    return (
        <button data-answer={isRight} className={s.answer} >{text}</button>
    )
}