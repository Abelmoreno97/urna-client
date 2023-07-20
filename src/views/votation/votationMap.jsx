import { Link } from "react-router-dom";
import Votebar from "../../components/votebar/votebar";
import style from "./votation.module.css";

const VotationMap = () => {
    return (
        <div className={style.cont}>
            <h1>Votation</h1>
            <Link className={style.Link} to="/userinfo">userinfo</Link> <br/>
            <Votebar />
            <div>
                <Link className={style.Link} to="../votations/votation/messages">mensajes</Link>
                <h1>map</h1>
            </div>
            <Link className={style.Link} to="/votations/votation/vote">VOTE</Link>
            
        </div>
    );
}

export default VotationMap;