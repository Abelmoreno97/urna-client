import {BACKEND_BASE_URL} from "./../../config/envs";
import Gstyle from "./../../AppGlobal.module.css";

const Login = () => {
  return (
    <div className={Gstyle.cont}>
      <p>LOGIN:</p>
      <a href={BACKEND_BASE_URL + "/auth/login"} className={Gstyle.Link}>
        Login
      </a>
    </div>
  );
};

export default Login;
