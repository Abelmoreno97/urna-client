import Gstyle from "./../../AppGlobal.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import heart from "../../assets/heart.svg";
import r_heart from "../../assets/r-heart.svg";
import useGetResponses from "./useGetResponses";
import ResponsesList from "./components/responsesList/responsesList";
import PageLayout from "../../layout/PageLayout/PageLayout";
import { cookie } from "../../utils";
import { useDispatch } from "react-redux";
import Like from "../../repositories/Like";
import { voteAddLike, voteRemoveLike } from "../../redux/features/votationDetailSlice";

const Msgdetail = () => {
  const userData = cookie.getObject("userData");
  const navigate = useNavigate();
  if (!userData) navigate("/");
  const { _id: user_id } = userData;

  const { data, error, loading, addOrRemoveLike } = useGetResponses();
  const exampleResponses = [
    {
      _id: "asdsad",
      emitter_id: "u342343",
      receiver_id: "sdagjsdflgjsdj3",
      body: "Comentario de la respuesta1",
      pinned: false,
      created_at: "2021-08-20T16:48:48.891Z",
    },
    {
      _id: "asdsad",
      emitter_id: "u342343",
      receiver_id: "sdagjsdflgjsdj3",
      body: "Comentario de la respuesta2",
      pinned: false,
      created_at: "2021-08-20T17:48:48.891Z",
    },
  ];

  const dispatch = useDispatch();
  const handleLike = (vote_id) => {
    Like.sendVoteLike(vote_id).then((res) => {
      const { result } = res.data;
      addOrRemoveLike(user_id);
      if (result === "like") {
        dispatch(voteAddLike({ vote_id, user_id }));
      } else {
        dispatch(voteRemoveLike({ vote_id, user_id }));
      }
    });
  };

  console.log(data);
  if (error) return <h2>Lo siento hubo un error</h2>;
  if (loading) return <h2>Loading...</h2>;
  return (
    <PageLayout>
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "cadetblue",
          height: "auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          borderRadius: "5px",
          gap: "5px",
        }}
      >
        <Box
          sx={{
            padding: "5px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>{data.comment}</Text>
            <Image
              src={data.likes.includes(user_id) ? r_heart : heart}
              mr="4px"
              cursor="pointer"
              onClick={() => handleLike(data._id)}
            />
          </Box>
          <ResponsesList responsesArray={exampleResponses} />
        </Box>
      </Box>

      <div style={{ display: "flex", justifyContent: "start" }}>
        <Link className={Gstyle.Link} onClick={() => history.back()}>
          ATRAS
        </Link>
      </div>
    </PageLayout>
  );
};

export default Msgdetail;
