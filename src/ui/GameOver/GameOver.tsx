import {NavLink} from "react-router-dom";
import React from "react";
import {useDispatch} from "react-redux";
import {toggleIsActiveAC} from "../../bll/bodyGame-reducer";

export const GameOver = () => {

    const dispatch = useDispatch()

    const onLinkClick = () => {
        dispatch(toggleIsActiveAC())
    }

    return (
        <div>
            Game over
            <div onClick={onLinkClick}>Продул, неудачник!</div>
        </div>
    )
}