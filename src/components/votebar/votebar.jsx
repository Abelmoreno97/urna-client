import { HStack, Image, VStack } from "@chakra-ui/react";
import person from "../../assets/person.svg";

const Votebar = ({ sortedOptions, alreadyVoted }) => {
  return (
    <HStack justify={"space-around"} w={"100%"}>
      {sortedOptions?.slice(0, 3).map((option, i) => (
        <VStack key={"sortedOption" + i}>
          <Image w={"75px"} h={"75px"} src={option.images[0] || person} alt="opcion"></Image>
          <p>{option.title}</p>
          {alreadyVoted && (
          <span>
            {Math.floor(option.stats.ratio) || "sin"}%{" / "}
            {option.stats.votes || "sin"} votos
          </span>
          )}
        </VStack>
      ))}
    </HStack>
  );
};

export default Votebar;
