import { Link } from "react-router-dom";
import Votation from "../votation/votation";

const Votations = () => {
    return (
        <>
            <h1>Votations active</h1>
            <Link to="/votation" element={<Votation />}  >Votation</Link>
        </>
    );
}

export default Votations;