import { Link, useParams } from "react-router-dom";
import Votebar from "../../components/votebar/votebar";
import style from "./votation.module.css";
import Gstyle from "./../../AppGlobal.module.css";
import Navbar from "../../components/navbar/navbar";
import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import chatleft from "../../assets/chat-left.svg";
import heart from "../../assets/heart.svg";
import plus from "../../assets/plus-square.svg";
import useGetVotationDetails from "./useGetVotationDetails";
import { useDispatch, useSelector } from "react-redux";
import Like from "../../repositories/Like";
import { cookie } from "../../utils";
import { voteAddLike, voteRemoveLike } from "../../redux/features/votationDetailSlice";

const VotationDetail = () => {
  const { id } = useParams();
  useGetVotationDetails(id);
  const { _id: user_id } = cookie.getObject("userData");

  const { data, error, status } = useSelector((state) => state.votationDetail);
  const { votation, votes, sortedOptions, alreadyVoted } = data;

  const dispatch = useDispatch();
  const handleLike = (vote_id) => {
    Like.sendVoteLike(vote_id).then((res) => {
      const { result } = res.data;
      if (result === "like") {
        dispatch(voteAddLike({ vote_id, user_id }));
      } else {
        dispatch(voteRemoveLike({ vote_id, user_id }));
      }
    });
  };

  if (error) return <h2>Lo sentimos hubo un error </h2>;
  if (status === "loading") return <h2>Loading...</h2>;
  return (
    <div>
      <div className={Gstyle.cont}>
        <h1>{votation?.title}</h1>
        <Votebar sortedOptions={sortedOptions} />
        {alreadyVoted ? (
          <p>¡Su voto fué registrado, muchas gracias!</p>
        ) : (
          <Link className={style.Link} to={`/votations/${id}/vote`}>
            Votar
          </Link>
        )}

        <div>
          <div className={style.votecont}>
            {votes?.map((vote, i) => (
              <div key={"voteMsg" + i} className={style.votecard}>
                {vote?.comment}
                <VStack>
                  <Link to={`../votations/${votation._id}/messages/${vote._id}`}>
                    <Image src={chatleft}></Image>
                  </Link>
                  <Image
                    src={vote?.likes.includes(user_id) ? heart : plus}
                    cursor={"pointer"}
                    onClick={() => handleLike(vote._id)}
                  ></Image>
                  <Text>{vote?.likes.length} likes</Text>
                </VStack>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Navbar />
      </div>
    </div>
  );
};

export default VotationDetail;
