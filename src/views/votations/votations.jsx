import { Link } from "react-router-dom";
import VotationMessage from "../votation/votationMessage";
import style from "./votations.module.css";
import Gstyle from "./../../AppGlobal.module.css";
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
      <div className={Gstyle.cont}>
        <h1>Votations active</h1>
        <br />
        <div>
          {data.map((votation, index) => (
            <Link
              key={index}
              className={Gstyle.Link}
              to={`/votation/${votation._id}/messages`}
              element={<VotationMessage />}
            >
              {votation.title}
            </Link>
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
