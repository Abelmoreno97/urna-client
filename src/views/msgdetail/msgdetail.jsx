import style from "./msgdetail.module.css";
import Gstyle from "./../../AppGlobal.module.css";
import { Link, useParams } from "react-router-dom";
import { Image, VStack } from "@chakra-ui/react";
import chatleft from "../../assets/chat-left.svg";
import heart from "../../assets/heart.svg";
import useGetResponses from "./useGetResponses";

const Msgdetail = () => {
  const { data, error, loading } = useGetResponses();
  console.log(data);
  if (error) return <h2>Lo siento hubo un error</h2>;
  if (loading) return <h2>Loading...</h2>;
  return (
    <div>
      <div className={Gstyle.cont}>
        <h1>Msg detail</h1>
        <div>
          <div className={style.votecont}>
            <div className={style.votecard}>
              VOTO RAIZ DEL QUE SE ABRIO EL HILO DE RESPUESTAS{" "}
              <VStack>
                <Image src={chatleft} />
                <Image src={heart} />
              </VStack>
            </div>
            <div className={style.votecard}>
              Mensaje de respuesta{" "}
              <VStack>
                <Image src={heart} />
              </VStack>
            </div>
            <div className={style.votecard}>
              Mensaje de respuesta{" "}
              <VStack>
                <Image src={heart} />
              </VStack>
            </div>
            <div className={style.votecard}>
              Mensaje de respuesta{" "}
              <VStack>
                <Image src={heart} />
              </VStack>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "start" }}>
        <Link className={Gstyle.Link} onClick={() => history.back()}>
          ATRAS
        </Link>
      </div>
    </div>
  );
};

export default Msgdetail;
