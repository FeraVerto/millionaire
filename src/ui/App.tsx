import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import { BodyGame } from './BodyGame/BodyGame';
import { Navbar } from './Navbar/Navbar';
import { StartGame } from './StartGame/StartGame';
import { GameOver } from './GameOver/GameOver';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../bll/store';
import { animated, useSpring } from 'react-spring';
import { resetScoreAC, toggleIsActiveAC } from '../bll/bodyGame-reducer';

const App: React.FC = (props) => {
  let isActive = useSelector<AppStateType, boolean>(
    (state) => state.bodyGame.questionBlock.isActive
  );
  const animatedHeader = useSpring<Object>({});
  const dispatch = useDispatch();
  const resetScoreHandler = () => {
    dispatch(resetScoreAC());
    dispatch(toggleIsActiveAC());
  };

  return (
    <div className={s.app_container}>
      <div className={s.app_header}>
        <NavLink
          to="/millionaire/"
          className={s.app_start_page_button}
          onClick={resetScoreHandler}
        >
          Сначала
        </NavLink>
        <animated.header style={animatedHeader}>
          Кто хочет стать МЕМлионером
        </animated.header>
      </div>
      <div className={s.app}>
        <main className={s.app_main}>
          <Navbar />

          <div className={s.game}>
            {!isActive ? (
              <GameOver />
            ) : (
              <Routes>
                <Route path="/millionaire/" element={<StartGame />} />
                <Route path="/millionaire/game" element={<BodyGame />} />
              </Routes>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
