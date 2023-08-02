import style from "./msgdetail.module.css";
import Gstyle from "./../../AppGlobal.module.css";
import { Link, useParams } from "react-router-dom";
import Votebar from "../../components/votebar/votebar";
import { Image, VStack } from "@chakra-ui/react";
import chatleft from "../../assets/chat-left.svg";
import heart from "../../assets/heart.svg";
import { useEffect, useState } from "react";
import useGetResponses from "./useGetResponses";
import { useSelector } from "react-redux";

const Msgdetail = () => {
  const { data, error, loading } = useGetResponses();
  if (error) return <h2>Lo siento hubo un error</h2>;
  if (loading) return <h2>Loading...</h2>;
  console.log(data);
  return (
    <div className={Gstyle.cont}>
      <h1>Msg detail</h1>
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
