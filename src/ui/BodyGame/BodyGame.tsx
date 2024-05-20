import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../bll/store';
import { QuestionsType } from '../../bll/state';
import { getNextQuestionAC, resetScoreAC } from '../../bll/bodyGame-reducer';
import { ButtonWithAnswer } from './ButtonWithAnswer/ButtonWithAnswer';
import React from 'react';
import s from './BodyGame.module.css';
import m from './../App.module.css';
import { randomColor } from '../../utils/randomColor';
import mldc from './../../static/image/molodec.jpg';

export const BodyGame = () => {
  const questions = useSelector<AppStateType, QuestionsType>(
    (state) => state.bodyGame.questionBlock.questions
  );
  const i = useSelector<AppStateType, number>((state) => state.bodyGame.i);
  const dispatch = useDispatch();

  let onAnswerOptionClick = (e: any) => {
    if (e.target.dataset.answer === 'true') {
      dispatch(getNextQuestionAC());
    } else {
      dispatch(resetScoreAC());
    }
  };

  return (
    <div className={s.body_game}>
      {i === 15 ? (
        <div className={s.success_block}>
          <img src={mldc} alt="Победа" />
          <div className={m.button}>А кто это у нас тут победитель?</div>
        </div>
      ) : (
        <div className={s.quiz_block}>
          <div className={s.question_text}>{questions[i].text}</div>
          <div className={s.quiz_img}>
            <img src={questions[i].image} alt="" />
          </div>
          <div
            className={s.answer_block}
            onClick={(e) => onAnswerOptionClick(e)}
          >
            {questions[i].answers.map((a) => (
              <ButtonWithAnswer isRight={a.isRight} text={a.text} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
