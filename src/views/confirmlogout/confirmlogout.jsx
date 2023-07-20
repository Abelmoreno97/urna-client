import { Link } from "react-router-dom";
import style from "./confirmlogout.module.css";

const Confirmlogout = () => {
    return (
        <div className={style.cont}>
            <h1>Confirmlogout</h1>
            <h1>Confirmar para salir LOGOUT</h1>
            <Link className={style.Link} to="/">Confirmar</Link> <br/>
            <Link   className={style.Link} to="/userinfo">volver</Link>
        </div>
    );
}

export default Confirmlogout;