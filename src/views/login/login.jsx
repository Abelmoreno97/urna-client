import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./login.module.css";

const Login = ()=>{
    const { loginWithRedirect } = useAuth0();
    return(
        <div className={style.cont}>
            <p>LOGIN:</p>
            <button className={style.Link} onClick={loginWithRedirect}>Login</button>
        
        </div>
    )
};

export default Login;