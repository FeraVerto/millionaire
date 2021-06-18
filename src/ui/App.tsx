import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import s from './App.module.css';
import {BodyGame} from "./BodyGame/BodyGame";
import {Navbar} from "./Navbar/Navbar";
import {StartGame} from "./StartGame/StartGame";
import {GameOver} from "./GameOver/GameOver";
import {useSelector} from "react-redux";
import {AppStateType} from "../bll/store";


const App: React.FC = (props) => {

    let isActive = useSelector<AppStateType, boolean>(state => state.bodyGame.questionBlock.isActive)
    let totalScore = useSelector<AppStateType, number>(state => state.bodyGame.totalScore)
    const i = useSelector<AppStateType, number>((state) => state.bodyGame.i)


    return (
        <div className={s.app}>

            <header className={s.app_header}>
                Кто хочет стать react-разработчиком?
            </header>

            <main className={s.app_main}>
                <div className={s.nav}>
                    <Navbar/>
                </div>

                <div className={s.body_game}>
                    <Route exact path="/" component={() => <StartGame/>}/>
                </div>
                {
                    !isActive
                        ? <div className={s.body_game}>
                            <GameOver/>
                        </div>
                        : <div className={s.body_game}>
                            <Route path="/game" component={() => <BodyGame/>}/>
                        </div>
                }
            </main>

            <footer className={s.app_footer}>
                Контакты
            </footer>

        </div>
    );
}

export default App;
