import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import s from './App.module.css';
import {BodyGame} from "./BodyGame/BodyGame";
import {Navbar} from "./Navbar/Navbar";
import {StartGame} from "./StartGame/StartGame";
import {GameOver} from "./GameOver/GameOver";
import {useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {animated, useSpring} from "react-spring";


const App: React.FC = (props) => {

    let isActive = useSelector<AppStateType, boolean>(state => state.bodyGame.questionBlock.isActive)
    const animatedHeader = useSpring<Object>({})

    return (
        <div className={s.app}>

            <animated.header style={animatedHeader} className={s.app_header}>
                Кто хочет стать react-разработчиком?
            </animated.header>

            <main className={s.app_main}>
                <div className={s.nav}>
                    <Navbar/>
                </div>

                <div className={s.game}>
                    {/*<Route exact path="/" component={() => <StartGame/>}/>*/}
                    <NavLink to='/game'>Начнем игру</NavLink>
                </div>
                {
                    !isActive
                        ? <div className={s.game}>
                            <GameOver/>
                        </div>
                        : <div className={s.game}>
                            <Route path="/game" component={() => <BodyGame/>}/>
                        </div>
                }
            </main>

            <footer className={s.app_footer}>
                <ul className={s.social}>
                    <li>Гитхаб</li>
                    <li>Линкдин</li>
                    <li>Телеграм</li>
                </ul>
            </footer>

        </div>
    );
}

export default App;
