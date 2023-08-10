import { HStack, Image, VStack } from "@chakra-ui/react";
import person from "../../assets/person.svg";
import { useState } from "react";

const Votebar = ({ sortedOptions, alreadyVoted }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedOptions.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedOptions.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <HStack justify={"space-around"} w={"100%"}>
      {currentPage !== 1 && (
        <button onClick={() => handlePageChange(currentPage - 1)}>
          {"<<"}
        </button>
      )}

      {currentItems?.map((option, i) => (
        <VStack key={"sortedOption" + i}>
          <Image
            w={"75px"}
            h={"75px"}
            src={option.images[0] || person}
            alt="opcion"
          ></Image>
          <p>{option.title}</p>
          {alreadyVoted && (
            <span>
              {Math.floor(option.stats.ratio) || "sin"}%{" / "}
              {option.stats.votes || "sin"} votos
            </span>
          )}
        </VStack>
      ))}
      {currentPage !== totalPages && (
        <button onClick={() => handlePageChange(currentPage + 1)}>
          {">>"}
        </button>
      )}
    </HStack>
  );
};

export default Votebar;
