import { Button, HStack, Textarea, VStack } from "@chakra-ui/react";
import ResponseRepository from "../../../../repositories/Response";
import { useState } from "react";

function ReplyComponent({ containerRef, vote_id, receiver_id }) {
  const [responseInp, setResponseInp] = useState("");
  const handleChangeResponseInp = (e) => {
    const { value } = e.target;
    if (value.length < 255) setResponseInp(value);
  };

  const handleSubmitResponse = () => {
    if (responseInp.length == 0) return;

    const responseData = {
      vote_id,
      receiver_id,
      body: responseInp,
    };
    setResponseInp("");
    ResponseRepository.create(responseData, (data) => {
      // esta cb tiene que actualizar el redux del emisor
      console.log("callback", data);
    });
  };
  const handleCancel = () => {
    setResponseInp("");
    containerRef.current.style.height = "0px";
  };

  return (
    <VStack
      ref={containerRef}
      sx={{
        overflow: "hidden",
        width: "100%",
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
          onClick={handleCancel}
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
            cursor: !responseInp && "auto",
            _hover: { bg: responseInp && "rgba(255,255,255,.5)" },
            _active: { bg: responseInp && "rgba(255,255,255,.5)" },
          }}
          onClick={handleSubmitResponse}
        >
          Responder
        </Button>
      </HStack>
    </VStack>
  );
}

export default ReplyComponent;
