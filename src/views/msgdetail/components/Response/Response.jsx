import { Box, Image, Text, VStack } from "@chakra-ui/react";
import heart from "../../../../assets/heart.svg";

function Response({ response }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        bgColor: "rgb(107, 181, 183)",
        mt: "5px",
        borderRadius: "3px",
        padding: "5px",
      }}
    >
      <img
        src={response.emitter_id.avatar}
        alt="avatar"
        width="40px"
        height="40px"
        style={{ borderRadius: "50%" }}
      />
      <Text>{response.emitter_id.username}</Text>
      <Text maxWidth="calc(100% - 40px)">@{response.receiver_id.username}</Text>
      <Text maxWidth="calc(100% - 40px)">{response.body}</Text>

      <Image src={heart} sx={{ position: "absolute", right: "4px", bottom: "4px" }} />
    </Box>
  );
}

export default Response;
