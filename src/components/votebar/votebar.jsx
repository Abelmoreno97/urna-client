import { HStack, Image, VStack } from "@chakra-ui/react";
import person from "../../assets/person.svg";
import { useState } from "react";
import left from "./../../assets/chevron-double-left.svg";
import right from "./../../assets/chevron-double-right.svg";

const Votebar = ({ sortedOptions, alreadyVoted }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedOptions?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedOptions?.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <HStack justify={"space-between"} w={"100%"}>
      <HStack w={"10%"}>
        {currentPage !== 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            <Image w={"50px"} h={"50px"} src={left}></Image>
          </button>
        )}
      </HStack>
      <HStack w={"80%"} justify={"space-around"}>
        {currentItems?.map((option, i) => (
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
      <HStack w={"10%"}>
        {currentPage !== totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>
            <Image w={"50px"} h={"50px"} src={right}></Image>
          </button>
        )}
      </HStack>
    </HStack>
  );
};

export default Votebar;
