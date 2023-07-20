import { Link } from "react-router-dom";
import VotationMessage from "../votation/votationMessage";
import style from "./votations.module.css";

const Votations = () => {

    return (
        <div className={style.cont}>
            <h1>Votations active</h1>
            <Link className={style.Link} to="/userinfocopy">userinfo</Link> <br/>
            <Link className={style.Link} to="/votations/votation/messages" element={<VotationMessage />}  >Votacion activa</Link>
            <br/>
            <Link className={style.Link} to="/votations/form">solicitar votacion</Link>
        </div>
    );
}

export default Votations;