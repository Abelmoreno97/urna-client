import { Link } from "react-router-dom";
import style from "./login.module.css";

const Login = ()=>{
    return(
        <div className={style.cont}>
            <p>LOGIN:</p>
            <Link  to="/votations" className={style.Link}>Userlogin enter</Link>
        </div>
    )
};

export default Login;