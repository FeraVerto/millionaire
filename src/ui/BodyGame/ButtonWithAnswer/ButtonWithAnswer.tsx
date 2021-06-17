type ButtonType = {
    isRight: string,
    text: string
}

export const Button = ({isRight, text}: ButtonType) => {
    return (
        <button data-answer={isRight}>{text}</button>
    )
}