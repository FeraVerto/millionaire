import React from 'react'
import { NavLink } from 'react-router-dom'

type StartGameType = {

}

export const StartGame = () => {
    return (
        <div>
            <NavLink to='/game'>Начнем игру</NavLink>
        </div>
    )
}
