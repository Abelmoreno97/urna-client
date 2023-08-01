import { Link, useParams } from "react-router-dom";
import Votebar from "../../components/votebar/votebar";
import style from "./votation.module.css";
import Gstyle from "./../../AppGlobal.module.css";
import Navbar from "../../components/navbar/navbar";
import { Image, VStack } from "@chakra-ui/react";
import chatleft from "../../assets/chat-left.svg";
import heart from "../../assets/heart.svg";
import useGetVotationDetails from "./useGetVotationDetails";
import { useSelector } from "react-redux";

const VotationMessage = () => {
  const { id } = useParams();
  useGetVotationDetails(id);

  const { data, error, status } = useSelector((state) => state.votationDetail);
  const { votation, votes, sortedOptions } = data;

  if (error) return <h2>Lo sentimos hubo un error </h2>;

  if (status === "loading") return <h2>Loading...</h2>;

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
