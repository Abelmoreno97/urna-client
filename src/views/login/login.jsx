
import Gstyle from "./../../AppGlobal.module.css";
const LOGIN_URL = import.meta.env.VITE_API_LOGIN_URL;

const Login = () => {
  return (
    <div className={Gstyle.cont}>
      <p>LOGIN:</p>
      <a href={LOGIN_URL} className={Gstyle.Link}>
        Login
      </a>
    </div>
  );
};

export default Login;
