import { Link } from "react-router-dom";
import Votebar from "../../components/votebar/votebar";
import style from "./votation.module.css";

const VotationMessage = () => {
    
    return (
        <div className={style.cont}>
            <h1>Votation</h1>
            <Link className={style.Link} to="/userinfo">userinfo</Link> <br/>
           <Votebar/>
            <div>
                <Link className={style.Link} to="../votations/votation/map">mapa</Link>
                <div className={style.votecont}>
                    <div className={style.votecard}>Voto acompañado de mensaje <Link className={style.Link} to="../votations/votation/messages/msgdetail">comentar</Link></div>
                    <div className={style.votecard}>Voto acompañado de mensaje <Link className={style.Link} to="../votations/votation/messages/msgdetail">comentar</Link></div>
                    <div className={style.votecard}>Voto acompañado de mensaje <Link className={style.Link} to="../votations/votation/messages/msgdetail">comentar</Link></div>
                    <div className={style.votecard}>Voto acompañado de mensaje <Link className={style.Link} to="../votations/votation/messages/msgdetail">comentar</Link></div>
                </div>
            </div>
            <Link className={style.Link} to="/votations/votation/vote">VOTE</Link>
          
            
        </div>
    );
}

export default VotationMessage;