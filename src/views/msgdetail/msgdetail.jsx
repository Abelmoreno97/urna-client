import style from "./msgdetail.module.css";
import { Link } from "react-router-dom";
import Votebar from "../../components/votebar/votebar";

const Msgdetail = () => {
    
    return (
        <div className={style.cont}>
            <h1>Votation detail</h1>
            <Link className={style.Link} to="../votations/votation/messages">volver</Link> <br/>
           <Votebar/>
            <div>
                <div className={style.votecont}>
                    <div className={style.votecard}>Voto acompañado de mensaje <Link className={style.Link} to="../votations/votation/messages/msgdetail">comentar</Link></div>
                    <div className={style.votecard}>Voto acompañado de mensaje <Link className={style.Link} to="../votations/votation/messages/msgdetail">comentar</Link></div>
                    <div className={style.votecard}>Voto acompañado de mensaje <Link className={style.Link} to="../votations/votation/messages/msgdetail">comentar</Link></div>
                    <div className={style.votecard}>Voto acompañado de mensaje <Link className={style.Link} to="../votations/votation/messages/msgdetail">comentar</Link></div>
                </div>
            </div>
          
            
        </div>
    );
}

export default Msgdetail;