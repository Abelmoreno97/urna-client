import { VStack } from "@chakra-ui/react";

function PageLayout({ children }) {
  return (
    <VStack
      alignItems={"center"}
      justify={"space-between"}
      bg={"#2D3748"}
      p={"30px"}
      w={["400px","500px","700px","900px","900px"]}
      h={"700px"}
    >
      {children}
    </VStack>
  );
}

export default PageLayout;
