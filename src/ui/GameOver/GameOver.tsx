import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleIsActiveAC } from '../../bll/bodyGame-reducer';
import fat_oh from './../../static/image/fat_oh.jpeg';
import s from './GameOver.module.css';

export const GameOver = () => {
  const dispatch = useDispatch();

  const onLinkClick = () => {
    dispatch(toggleIsActiveAC());
  };

  return (
    <div className={s.game_over} onClick={onLinkClick}>
      <img src={fat_oh} alt="game over" />
      <span>Game over!</span>
    </div>
  );
};
