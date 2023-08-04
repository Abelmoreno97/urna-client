import { Link } from "react-router-dom";
import VotationDetail from "../votation/votationDetail";
import style from "./votations.module.css";
import Gstyle from "./../../AppGlobal.module.css";
import { Image } from "@chakra-ui/react";
import { useGetVotations } from "./useGetVotations";
import { formatDate } from "../../utils/date";

const Votations = () => {
  const { data, status, error } = useGetVotations();
  if (error) return <h2>Error</h2>;
  if (status == "loading") return <h2>Loader</h2>;
  if (data.length == 0) return <h2>No hay votaciones activas</h2>;
  return (
    <div>
      <div className={Gstyle.cont}>
        <h1>Votations active</h1>
        <br />
        <div className={style.mapcont}>
          {data.map((votation, index) => (
            <div>
              <Link
                key={index}
                className={Gstyle.Link}
                to={`/votations/${votation._id}`}
                element={<VotationDetail />}
              >
                {votation.title}
              </Link>
              <p>
                Apertura: {formatDate(votation.opening_date)} Cierre:{" "}
                {formatDate(votation.closing_date)}
              </p>
            </div>
          ))}
        </div>
        <br />

        <Link className={Gstyle.Link} to="/votations/form">
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
        <Link className={Gstyle.Link} to="/userinfo">
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
