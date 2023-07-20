import { Link } from "react-router-dom";

const Userinfocopy = () => {
    return (
        <div>
            <h1>Userinfo</h1>
            <Link to="/confirmlogout">logout</Link> <br/>
            <Link to="/votations">atras</Link>
        </div>
    );
}

export default Userinfocopy;