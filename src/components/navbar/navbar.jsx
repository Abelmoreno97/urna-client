import { Link, useParams } from "react-router-dom";
import style from "./navbar.module.css";
import { Image } from "@chakra-ui/react";
import { cookie } from "../../utils";

const Navbar = () => {
  const user = cookie.getObject("userData");
  return (
    <div className={style.navbar}>
      <Link className={style.Link} to="/votations">
        VOTATIONS
      </Link>
      <Link className={style.Link} to="../votations/votation/messages">
        MESSAGES
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
          src={user?.avatar}
          alt={user?.name}
        ></Image>{" "}
        <p>userinfo</p>
      </Link>
    </div>
  );
};

export default Navbar;
