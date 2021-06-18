type ButtonType = {
    isRight: boolean | string,
    text: string
}

export const ButtonWithAnswer = ({isRight, text}: ButtonType) => {
    return (
        <button data-answer={isRight}>{text}</button>
    )
}