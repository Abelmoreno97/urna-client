import {BACKEND_BASE_URL} from "./../../config/envs";
import Gstyle from "./../../AppGlobal.module.css";
import PageLayout from "./../../layout/PageLayout/PageLayout";

const Login = () => {
  return (
    <PageLayout>
      <p>LOGIN:</p>
      <a href={BACKEND_BASE_URL + "/auth/login"} className={Gstyle.Link}>
        Login
      </a>
    </PageLayout>
  );
};

export default Login;
