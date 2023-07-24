import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import { Image } from "@chakra-ui/react";

const Navbar = () => {
  // const  user  =  lo vamos a sacar el localStorage

  return (
    <div className={style.navbar}>
      <Link className={style.Link} to="/votations">
        VOTATIONS
      </Link>
      <Link className={style.Link} to="../votations/votation/messages">
        MESSAGES
      </Link>
      <Link className={style.Link} to="/votations/votation/vote">
        VOTE
      </Link>
      <Link className={style.Link} to="../votations/votation/map">
        MAP
      </Link>
      <Link className={style.Link} to="/userinfo">
        {" "}
        <Image
          borderRadius="50%"
          w={"30px"}
          h={"30px"}
          src={user?.picture}
          alt={user?.name}
        ></Image>{" "}
        <p>userinfo</p>
      </Link>
    </div>
  );
};

export default Navbar;
