import {Link} from "react-router-dom"
import style from "./vote.module.css"
const Vote = () => {
    return (
        <div className={style.cont}>
            <h1>Vote</h1>
            <Link className={style.Link} to="../votations/votation/messages">atras</Link>
        </div>
    );
}

export default Vote;