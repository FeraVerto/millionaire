import s from "../BodyGame.module.css";

type ButtonType = {
    isRight: boolean | string,
    text: string,
    className: string
}

export const ButtonWithAnswer = ({isRight, text, className}: ButtonType) => {

    return (
        <button data-answer={isRight} className={s.answer}>{text}</button>
    )
}