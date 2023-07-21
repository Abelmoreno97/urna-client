import { HStack, Image, VStack } from "@chakra-ui/react";
import person from "../../assets/person.svg";

const Votebar = () => {
    
    return (
        <HStack>
          <VStack>
            <Image w={"50px"} h={"50px"}  src={person} alt='opcion'></Image>
            <p>opcion 1</p>
          </VStack>
          <VStack>
            <Image w={"50px"} h={"50px"} src={person} alt='opcion'></Image>
            <p>opcion 2</p>
          </VStack>
          <VStack>
            <Image w={"50px"} h={"50px"}  src={person} alt='opcion'></Image>
            <p>opcion 3</p>
          </VStack>
        </HStack>
    );
}

export default Votebar;
