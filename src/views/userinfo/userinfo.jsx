import { Link } from "react-router-dom";
import style from "./userinfo.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import AlertDialogExample from "../../components/confirmlogout/confirmlogout";


const Userinfo = () => {
    const { user, isAuthenticated, logout } = useAuth0();
    return (
        isAuthenticated && (
        <div className={style.cont}>
            <h1>Userinfo</h1>   
            <img src={user.picture} alt={user.name}></img>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.nickname}</p>
            <AlertDialogExample/>
            <button className={style.Link} onClick={() => history.back()} >
          atras
        </button>
        </div>)
    );
}

export default Userinfo;