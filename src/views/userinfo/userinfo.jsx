import { Link } from "react-router-dom";
import style from "./userinfo.module.css";

const Userinfo = () => {
    return (
        <div className={style.cont}>
            <h1>Userinfo</h1>
            <Link className={style.Link} to="/confirmlogout">logout</Link> <br/>
            <Link className={style.Link} to="../votations/votation/messages">atras</Link>
        </div>
    );
}

export default Userinfo;