import { Link } from "react-router-dom";
import style from "./votationform.module.css";

const Votationform = () => {
    return (
        <div className={style.cont}>
             <Link className={style.Link} to="/userinfo">userinfo</Link> <br/>
            <h1>Votationform</h1> <br/>
            <Link className={style.Link} to="/votations">atras</Link>


        </div>
    );
}

export default Votationform;