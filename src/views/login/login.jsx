import style from "./login.module.css";
const LOGIN_URL = import.meta.env.VITE_API_LOGIN_URL;

const Login = () => {
  return (
    <div className={style.cont}>
      <p>LOGIN:</p>
      <a href={LOGIN_URL} className={style.Link}>
        Login
      </a>
    </div>
  );
};

export default Login;
