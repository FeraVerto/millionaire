import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";
import s from './Navbar.module.css'

export const Navbar = () => {

    let totalScore = useSelector<AppStateType, number>(state => state.bodyGame.totalScore)

    return (
        <div className={s.rating}>
            {totalScore}
            <span>3000000</span>
            <span>1500000</span>
            <span>800000</span>
            <span>400000</span>
            <span>200000</span>
            <span>100000</span>
            <span>50000</span>
            <span>25000</span>
            <span>15000</span>
            <span>10000</span>
            <span>5000</span>
            <span>3000</span>
            <span>2000</span>
            <span>1000</span>
            <span>500</span>
        </div>
    )
}