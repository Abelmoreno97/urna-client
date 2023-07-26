import { Link, useParams } from "react-router-dom";
import Votebar from "../../components/votebar/votebar";
import style from "./votation.module.css";
import Navbar from "../../components/navbar/navbar";
import { Image, VStack } from "@chakra-ui/react";
import chatleft from "../../assets/chat-left.svg"
import heart from "../../assets/heart.svg"

const VotationMessage = () => {

  const {id} = useParams();
console.log(id);
  return (
    <div>
      <div className={style.cont}>
        <h1>Votation</h1>
        <Votebar />
        <div>

          <div className={style.votecont}>
            <div className={style.votecard}>
              Voto acompañado de mensaje{" "}
              <VStack>
              <Link
       
                to="../votations/votation/messages/msgdetail"
              >
                <Image src={chatleft}></Image>
              </Link>
              <Image src={heart}></Image>
              </VStack>
            </div>
            <div className={style.votecard}>
              Voto acompañado de mensaje{" "}
              <VStack>
              <Link
            
                to="../votations/votation/messages/msgdetail"
              >
                <Image src={chatleft}></Image>
              </Link>
              <Image src={heart}></Image>
              </VStack>
            </div>
            <div className={style.votecard}>
              Voto acompañado de mensaje{" "}
              <VStack>
              <Link
               
                to="../votations/votation/messages/msgdetail"
              >
                <Image src={chatleft}></Image>
              </Link>
              <Image src={heart}></Image>
              </VStack>
            </div>
            
          </div>
        </div>
      </div>
      <Navbar />

    </div>
  );
};

export default VotationMessage;
