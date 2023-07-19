import { Link } from "react-router-dom";
import Votebar from "../../components/votebar/votebar";

const VotationMessage = () => {
    
    return (
        <>
            <h1>Votation</h1>
           <Votebar/>
            <div>
                <Link to="../votations/votation/map">mapa</Link>
                <h1>messagges</h1>
            </div>
            <Link to="/votations/votation/vote">VOTE</Link>
          
            
        </>
    );
}

export default VotationMessage;