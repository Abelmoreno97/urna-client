import { Link, useParams } from "react-router-dom";
import style from "./navbar.module.css";
import { Image } from "@chakra-ui/react";
import { cookie } from "../../utils";

const Navbar = ({ votationId }) => {
  const user = cookie.getObject("userData");
  return (
    <div className={style.navbar}>
      <Link className={style.Link} to="/votations">
        VOTATIONS
      </Link>
      {window.location.pathname === `/votations/${votationId}` && (
        <Link className={style.Link} to={`/votations/${votationId}/map`}>
          MAP
        </Link>
      )}
      {window.location.pathname === `/votations/${votationId}/map` && (
        <Link className={style.Link} to={`/votations/${votationId}`}>
          VOLVER
        </Link>
      )}

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
