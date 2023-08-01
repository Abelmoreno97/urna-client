import { Link, useParams } from "react-router-dom";
import Votebar from "../../components/votebar/votebar";
import style from "./votation.module.css";
import Gstyle from "./../../AppGlobal.module.css";
import Navbar from "../../components/navbar/navbar";
import { Image, VStack } from "@chakra-ui/react";
import chatleft from "../../assets/chat-left.svg";
import heart from "../../assets/heart.svg";
import useGetVotationDetails from "../votationform/useGetVotationDetails";

const VotationMessage = () => {
  const { id } = useParams();

  const { votation, votes, sortedOptions } = useGetVotationDetails(id);
  console.log(votation);
  console.log(votes);

  return (
    <div>
      <div className={Gstyle.cont}>
        <h1>{votation?.title}</h1>
        <Votebar sortedOptions={sortedOptions} />
        <div>
          <div className={style.votecont}>
            {votes?.map((vote, i) => (
              <div key={"voteMsg" + i} className={style.votecard}>
                {vote?.comment}
                <VStack>
                  <Link to="../votations/votation/messages/msgdetail">
                    <Image src={chatleft}></Image>
                  </Link>
                  <Image src={heart}></Image>
                </VStack>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default VotationMessage;
