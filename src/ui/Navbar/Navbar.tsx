import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import s from './Navbar.module.css';

export const Navbar = () => {

    let id = useSelector<AppStateType, number>((state) => state.bodyGame.i)
    let stateScore = useSelector<AppStateType, Array<number>>(state => state.bodyGame.stateScore)

    return (
        <ul className={s.rating}>
            {
                stateScore.map((score, i) => {
                    return <li key={i} className={id == (i + 1) ? s.active : s.score}>{score}</li>
                }).reverse()
            }
        </ul>
    )
}