import Gstyle from "./../../AppGlobal.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import heart from "../../assets/heart.svg";
import r_heart from "../../assets/r-heart.svg";
import useGetResponses from "./useGetResponses";
import ResponsesList from "./components/responsesList/responsesList";
import PageLayout from "../../layout/PageLayout/PageLayout";
import { cookie } from "../../utils";
import { useDispatch } from "react-redux";
import { voteAddLike, voteRemoveLike } from "../../redux/features/votationDetailSlice";
import { useRef, useState } from "react";
import ReplyComponent from "./components/ReplyComponent/ReplyComponent";
import Vote from "../../repositories/Vote";

const Msgdetail = () => {
  const userData = cookie.getObject("userData");
  const navigate = useNavigate();
  if (!userData) navigate("/");
  const { _id: user_id } = userData;

  const {
    data: vote,
    error,
    loading,
    addOrRemoveLike,
    addOrRemoveResponseLike,
  } = useGetResponses();

  const dispatch = useDispatch();
  const handleLike = (vote_id) => {
    Vote.sendLike(vote_id).then((res) => {
      const { result } = res.data;
      addOrRemoveLike(user_id);
      if (result === "like") {
        dispatch(voteAddLike({ vote_id, user_id }));
      } else {
        dispatch(voteRemoveLike({ vote_id, user_id }));
      }
    });
  };

  const replyRef = useRef(null);
  const openReplyComponent = () => {
    replyRef.current.style.height = "100px";
  };
 console.log(vote);
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
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            padding: "5px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            minH: "75vh",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
            }}
          >
            <Text width="100%" fontWeight="600">
              {vote?.user_id?.username}
            </Text>
            <Text>{vote?.comment}</Text>
            <Image
              src={vote?.likes.includes(user_id) ? r_heart : heart}
              sx={{
                position: "absolute",
                right: "4px",
                bottom: "4px",
                cursor: "pointer",
              }}
              onClick={() => handleLike(vote?._id)}
            />
          </Box>
          <Button
            sx={{
              border: "none",
              padding: "3px 10px",
              h: "25px",
              w: "min-content",
              borderRadius: "34px",
              bg: "none",
              _hover: { bg: "rgba(255,255,255,.5)" },
            }}
            onClick={openReplyComponent}
          >
            Responder
          </Button>
          <ReplyComponent
            vote_id={vote?._id}
            receiver_id={vote?.user_id?._id}
            containerRef={replyRef}
          />
          <ResponsesList
            responsesArray={vote?.responses}
            vote_id={vote._id}
            addOrRemoveResponseLike={addOrRemoveResponseLike}
          />
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
