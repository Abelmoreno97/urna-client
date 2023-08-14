import { Link, useNavigate, useParams } from "react-router-dom";
import Votebar from "../../components/votebar/votebar";
import style from "./votation.module.css";
import Navbar from "../../components/navbar/navbar";
import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import chatleft from "../../assets/chat-left.svg";
import heart from "../../assets/heart.svg";
import r_heart from "../../assets/r-heart.svg";
import plus from "../../assets/plus-square.svg";
import useGetVotationDetails from "./useGetVotationDetails";
import { useDispatch, useSelector } from "react-redux";
import { cookie } from "../../utils";
import { voteAddLike, voteRemoveLike } from "../../redux/features/votationDetailSlice";
import { formatDate, openVotation } from "../../utils/date.js";
import PageLayout from "../../layout/PageLayout/PageLayout";
import Vote from "../../repositories/Vote";
import { useEffect } from "react";
import { socket } from "@src/services/socketService";

const VotationDetail = () => {
  const { id } = useParams();
  useGetVotationDetails(id);
  const navigate = useNavigate();

  const userData = cookie.getObject("userData");
  if (!userData) navigate("/");
  const { _id: user_id } = userData;

  const { data, error, status } = useSelector((state) => state.votationDetail);
  const { votation, votes, sortedOptions, alreadyVoted } = data;
  const dispatch = useDispatch();
  const handleLike = (vote_id) => {
    Vote.sendLike(vote_id).then((res) => {
      const { result } = res.data;
      if (result === "like") {
        dispatch(voteAddLike({ vote_id, user_id }));
      } else {
        dispatch(voteRemoveLike({ vote_id, user_id }));
      }
    });
  };

  useEffect(() => {
    socket.emit("room:join", { roomType: "votation", roomId: id });

    // pendiente (todavía no se emiten los eventos)
    socket.onAny((eventName, args) => {
      console.log(args);
      const listener = {
        like: (args) => {
          dispatch(voteAddLike({ vote_id: args.vote_id, user_id: args.user_id }));
        },
        dislike: (args) => {
          dispatch(voteRemoveLike({ vote_id: args.vote_id, user_id: args.user_id }));
        },
      };
      listener[eventName](args);
    });

    socket.on("error", (arg) => {
      console.log(arg);
    });
    return () => {
      socket && socket.disconnect();
    };
  }, []);

  if (error) return <h2>Lo sentimos hubo un error </h2>;
  if (status === "loading") return <h2>Loading...</h2>;
  return (
    <div>
      <PageLayout>
        <h1>{votation?.title}</h1>
        <Votebar sortedOptions={sortedOptions} alreadyVoted={alreadyVoted} />
        {!openVotation(votation.closing_date.slice(0, 10)) ? (
          <p>La votacion cierra el {formatDate(votation.closing_date)}</p>
        ) : (
          <p>La votacion ha finalizado</p>
        )}
        {alreadyVoted ? (
          <p>¡Su voto fué registrado, muchas gracias!</p>
        ) : !openVotation(votation.closing_date.slice(0, 10)) ? (
          <Link className={style.Link} to={`/votations/${id}/vote`}>
            Votar
          </Link>
        ) : null}

        <div className={style.votecont}>
          {votes?.map((vote, i) => (
            <HStack
              width={"340px"}
              key={"voteMsg" + i}
              alignItems={"cemter"}
              justify={"space-between"}
              p={"5px"}
              border={"1px solid black"}
              maxWidth={"350px"}
              borderRadius={"5px"}
            >
              <VStack align={"start"}>
                <p>
                  {vote?.user_id?.username} votó a {vote?.option_title}
                </p>
                {<br />}
                <Text maxWidth={"270px"}>{vote?.comment}</Text>
              </VStack>

              <VStack>
                <Link to={`../votations/${votation._id}/messages/${vote._id}`}>
                  <HStack
                    w={"50px"}
                    _hover={{
                      cursor: "pointer",
                      bgColor: "rgb(100, 100, 100, 0.5)",
                    }}
                    border={"1px solid rgb(70, 70, 70, 0.5)"}
                    borderRadius={"5px"}
                    padding={"5px"}
                    bgColor={"blackAlpha.300"}
                  >
                    <Text color={"white"}>{vote?.responses.length}</Text>
                    <Image src={chatleft}></Image>
                  </HStack>
                </Link>
                <HStack
                  w={"50px"}
                  _hover={{
                    cursor: "pointer",
                    bgColor: "rgb(100, 100, 100, 0.5)",
                  }}
                  border={"1px solid rgb(70, 70, 70, 0.5)"}
                  borderRadius={"5px"}
                  padding={"5px"}
                  bgColor={"blackAlpha.300"}
                  onClick={() => handleLike(vote._id)}
                >
                  <Text>{vote?.likes.length}</Text>
                  <Image src={vote?.likes.includes(user_id) ? r_heart : heart}></Image>
                </HStack>
              </VStack>
            </HStack>
          ))}
        </div>
      </PageLayout>
      <HStack>
        <Navbar votationId={votation._id} />
      </HStack>
    </div>
  );
};

export default VotationDetail;
