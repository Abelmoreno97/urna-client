import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import heart from "../../../../assets/heart.svg";
import r_heart from "../../../../assets/r-heart.svg";
import { useRef } from "react";
import ReplyComponent from "../ReplyComponent/ReplyComponent";
import ResponseRepository from "../../../../repositories/Response";
import { useNavigate } from "react-router";
import { cookie } from "../../../../utils";

function Response({ response, vote_id, addOrRemoveResponseLike }) {
  const userData = cookie.getObject("userData");
  const navigate = useNavigate();
  if (!userData) navigate("/");
  const { _id: user_id } = userData;

  const responseContainerRef = useRef(null);
  const showResponseContainer = () => {
    responseContainerRef.current.style.height = "100px";
  };

  const handleLike = (response_id) => {
    ResponseRepository.sendLike(response_id).then((res) => {
      const { result } = res.data;
      addOrRemoveResponseLike(response_id, user_id);
    });
  };

  const likeVerify = () => response?.likes?.find((id) => id === user_id);

  return (
    <VStack
      sx={{
        position: "relative",
        width: "100%",
        bgColor: "rgb(107, 181, 183)",
        mt: "5px",
        borderRadius: "3px",
        padding: "5px",
        alignItems: "flex-start",
      }}
    >
      <HStack>
        <img
          src={response.emitter_id.avatar}
          alt="avatar"
          width="40px"
          height="40px"
          style={{ borderRadius: "50%" }}
        />
        <Text>
          {response.emitter_id.username} {"->"} {response.receiver_id.username}
        </Text>
      </HStack>

      <Text maxWidth="calc(100% - 40px)">{response.body}</Text>

      <HStack>
        <Image
          src={likeVerify() ? r_heart : heart}
          cursor="pointer"
          sx={{ marginLeft: "4px" }}
          onClick={() => handleLike(response._id)}
        />
        <Button
          sx={{
            border: "none",
            padding: "3px 10px",
            h: "25px",
            borderRadius: "34px",
            bg: "none",
            _hover: { bg: "rgba(255,255,255,.5)" },
          }}
          onClick={showResponseContainer}
        >
          Responder
        </Button>
      </HStack>
      <ReplyComponent
        containerRef={responseContainerRef}
        vote_id={vote_id}
        receiver_id={response?.emitter_id?._id}
      />
    </VStack>
  );
}

export default Response;
