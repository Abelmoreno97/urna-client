import { Link } from "react-router-dom";
import VotationMessage from "../votation/votationMessage";

const Votations = () => {

    return (
        <>
            <h1>Votations active</h1>
            <Link to="/votations/votation/messages" element={<VotationMessage />}  >Votation</Link>
        </>
    );
}

export default Votations;