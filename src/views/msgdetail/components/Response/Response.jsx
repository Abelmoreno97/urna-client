import { Button, HStack, Image, Text, Textarea, VStack } from "@chakra-ui/react";
import heart from "../../../../assets/heart.svg";
import { useRef, useState } from "react";
import ResponseRepository from "../../../../repositories/Response";

function Response({ response, vote_id }) {
  const [responseInp, setResponseInp] = useState("");
  const handleChangeResponseInp = (e) => {
    const { value } = e.target;
    setResponseInp(value);
  };

  const handleSubmitResponse = ({ receiver_id, body }) => {
    const responseData = {
      vote_id,
      receiver_id,
      body,
    };
    setResponseInp("");
    ResponseRepository.send(responseData).then((res) => {
      console.log(res);
    });
  };

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
      <VStack
        ref={responseContainerRef}
        width="100%"
        sx={{
          overflow: "hidden",
          height: "0px",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Textarea
          placeholder="Agrega un comentario..."
          value={responseInp}
          onChange={handleChangeResponseInp}
          rows={1}
        />
        <HStack w={"100%"} justifyContent="end">
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
            onClick={() => {
              alert("crear cancel");
            }}
          >
            Cancelar
          </Button>
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
            onClick={() => {
              handleSubmitResponse({ receiver_id: response.emitter_id._id, body: responseInp });
            }}
          >
            Responder
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default Response;
