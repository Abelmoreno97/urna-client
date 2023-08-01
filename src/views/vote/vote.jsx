import { HStack, Image, VStack, Textarea, Button } from "@chakra-ui/react";
import style from "./vote.module.css";
import Gstyle from "./../../AppGlobal.module.css";
import person from "../../assets/person.svg";
import urna from "../../assets/urna.png";
import { useState } from "react";
import { useSelector } from "react-redux";
const Vote = () => {
  const [selection, setSelection] = useState();
  const [input, setInput] = useState("");
  const { data } = useSelector((state) => state.votationDetail);
  const { sortedOptions } = data;

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={Gstyle.cont}>
      <h1>Vote</h1>
      <h2>Elige tu opcion</h2>
      <HStack>
        {sortedOptions.map((option, i) => (
          <VStack cursor="pointer" key={i} onClick={() => setSelection(option)}>
            <Image
              w={"50px"}
              h={"50px"}
              src={option.images[0] || person}
              alt={option.title}
            ></Image>
            <p>{option.title}</p>
          </VStack>
        ))}
      </HStack>
      <h2>2. Agrega un comentario a tu voto (opcional)</h2>
      <Textarea
        onChange={handleChange}
        placeholder="escriba su comentario aqui."
      />
      <h2>3. Verifique su boleta y confirme su voto</h2>
      <HStack>
        <HStack border={"1px solid black"}>
          {selection?.images?.map((image, i) => (
            <Image
              key={i}
              w={"50px"}
              h={"50px"}
              src={image}
              alt={"preview" + i}
            ></Image>
          ))}
        </HStack>
        <VStack>
          <Image w={"150px"} h={"100px"} src={urna} alt="urna"></Image>
          <button className={Gstyle.Link} onClick={() => history.back()}>
            CONFIRMAR VOTO
          </button>
        </VStack>
      </HStack>
      <button className={Gstyle.Link} onClick={() => history.back()}>
        ATRAS
      </button>
    </div>
  );
};

export default Vote;
