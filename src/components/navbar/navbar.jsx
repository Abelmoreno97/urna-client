import { Link } from "react-router-dom";
import style from './navbar.module.css'
import { useAuth0 } from "@auth0/auth0-react";
import { Image } from "@chakra-ui/react";

const Navbar = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-around", backgroundColor:"gray"}}>
        <Link className={style.Link} to="/votations">VOTATIONS</Link>
        <Link className={style.Link} to="../votations/votation/messages">MESSAGES</Link>
        <Link className={style.Link} to="/votations/votation/vote">VOTE</Link>
        <Link className={style.Link} to="../votations/votation/map">MAP</Link>
        <Link className={style.Link} to="/userinfo"> <Image borderRadius="50%" w={"30px"} h={"30px"} src={user.picture} alt={user.name}></Image> <p>userinfo</p></Link>
    </div>  
        )
    );
}

export default Navbar;