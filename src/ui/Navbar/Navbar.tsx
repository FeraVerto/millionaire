import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/store";

export const Navbar = () => {

    let totalScore = useSelector<AppStateType, number>(state => state.bodyGame.totalScore)

    return (
        <div>
            {totalScore}
        </div>
    )
}