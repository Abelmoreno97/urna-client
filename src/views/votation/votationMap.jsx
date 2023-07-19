import { Link } from "react-router-dom";
import Votebar from "../../components/votebar/votebar";

const VotationMap = () => {
    return (
        <>
            <h1>Votation</h1>
            <Votebar />
            <div>
                <Link to="../votations/votation/messages">mensajes</Link>
                <h1>map</h1>
            </div>
            <Link to="/votations/votation/vote">VOTE</Link>
            
        </>
    );
}

export default VotationMap;