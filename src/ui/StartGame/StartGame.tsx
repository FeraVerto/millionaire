import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../App.module.css';

type StartGameType = {};

export const StartGame = () => {
  return (
    <NavLink className={s.button} to="/millionaire/game">
      Стартуем!
    </NavLink>
  );
};
