import { Link } from "react-router-dom";
import VotationMessage from "../votation/votationMessage";
import style from "./votations.module.css";
import { Image } from "@chakra-ui/react";

const Votations = () => {
  const [votationsData, setVotationsData] = useState([]);
  // const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    fetch("http://localhost:3081/voting")
      .then((res) => res.json())
      .then((data) => setVotationsData(data));
  } , []);

  return (
    <div>
      <div className={style.cont}>
        <h1>Votations active</h1>
        <Link
          className={style.Link}
          to="/votations/votation/messages"
          element={<VotationMessage />}
        >
          Votacion activa
        </Link>
        <br />
        <div>
        {votationsData.map((votation) => {
          <p>{votation.title}</p>
        })}
        </div>
        <br />

        <Link className={style.Link} to="/votations/form">
          solicitar votacion
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
        }}
      >
        <Link className={style.Link} to="/userinfo">
          <Image
            borderRadius="50%"
            w={"30px"}
            h={"30px"}
            src={user?.picture}
            alt={user?.name}
          ></Image>{" "}
          <p>userinfo</p>
        </Link>
      </div>
    </div>
  );
};

export default Votations;
