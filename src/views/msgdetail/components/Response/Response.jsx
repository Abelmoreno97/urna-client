import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import heart from "../../../../assets/heart.svg";
import { useRef } from "react";
import ReplyComponent from "../ReplyComponent/ReplyComponent";

function Response({ response, vote_id }) {
  const responseContainerRef = useRef(null);
  const showResponseContainer = () => {
    responseContainerRef.current.style.height = "100px";
  };

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
        <Image src={heart} sx={{ marginLeft: "4px" }} />
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
