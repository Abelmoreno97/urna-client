import { Link } from "react-router-dom";

const Confirmlogout = () => {
    return (
        <div>
            <h1>Confirmlogout</h1>
            <h1>Confirmar para salir LOGOUT</h1>
            <Link to="/">Confirmar</Link> <br/>
            <Link to="/userinfo">volver</Link>
        </div>
    );
}

export default Confirmlogout;