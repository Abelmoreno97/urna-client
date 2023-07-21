import { Link } from "react-router-dom";
import VotationMessage from "../votation/votationMessage";
import style from "./votations.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Image } from "@chakra-ui/react";

const Votations = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <div>
        <div className={style.cont}>
            <h1>Votations active</h1>
            <Link className={style.Link} to="/votations/votation/messages" element={<VotationMessage />}  >Votacion activa</Link>
            <br/>
            <Link className={style.Link} to="/votations/form">solicitar votacion</Link>
        </div >
        <div style={{ display: "flex", flexDirection: "row", justifyContent:"end"}}>
            <Link className={style.Link} to="/userinfo"><Image borderRadius="50%" w={"30px"} h={"30px"} src={user.picture} alt={user.name}></Image> <p>userinfo</p></Link> <br/>
        </div>
        </div>
        )
    );
}

export default Votations;