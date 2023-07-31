import style from "./msgdetail.module.css";
import Gstyle from "./../../AppGlobal.module.css";
import { Link } from "react-router-dom";
import Votebar from "../../components/votebar/votebar";
import { Image, VStack } from "@chakra-ui/react";
import chatleft from "../../assets/chat-left.svg";
import heart from "../../assets/heart.svg";

const Msgdetail = () => {
  return (
    <div className={Gstyle.cont}>
      <h1>Votation detail</h1>
      <Votebar />
      <Link className={Gstyle.Link} to="../votations/votation/messages">
        volver
      </Link>{" "}
      <br />
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
  );
};

export default Msgdetail;
