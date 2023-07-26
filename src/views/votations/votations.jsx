import { Link } from "react-router-dom";
import VotationMessage from "../votation/votationMessage";
import style from "./votations.module.css";
import { Image } from "@chakra-ui/react";
import { useGetVotations } from "./useGetVotations";

const Votations = () => {
  const { data, status, error } = useGetVotations();
  console.log(data);
  if (error) return <h2>Error</h2>;
  if (status == "loading") return <h2>Loader</h2>;
  if (data.length == 0) return <h2>No hay votaciones activas</h2>;
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
          {data.map((votation) => {
            <p>{votation.title}</p>;
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
            // src={user?.picture}
            // alt={user?.name}
          ></Image>{" "}
          <p>userinfo</p>
        </Link>
      </div>
    </div>
  );
};

export default Votations;
