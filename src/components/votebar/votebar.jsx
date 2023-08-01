import { HStack, Image, VStack } from "@chakra-ui/react";
import person from "../../assets/person.svg";

const Votebar = ({ sortedOptions }) => {
  return (
    <HStack>
      {sortedOptions.slice(0, 3).map((option, i) => (
        <VStack key={"sortedOption" + i}>
          <Image w={"75px"} h={"75px"} src={option.images[0] || person} alt="opcion"></Image>
          <p>{option.title}</p>
          <span>{option.stats.ratio || "ratio"}%</span>
          <span>{option.stats.votes || "cantidad"} votos</span>
        </VStack>
      ))}
    </HStack>
  );
};

export default Votebar;
