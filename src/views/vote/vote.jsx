import { HStack, Image, VStack, Textarea } from "@chakra-ui/react";
import style from "./vote.module.css"
import person from "../../assets/person.svg";
import urna from "../../assets/urna.png";
const Vote = () => {
    return (
        <div className={style.cont}>
            <h1>Vote</h1>
            <h2>Elige tu opcion</h2>
            <HStack>
          <VStack>
            <Image w={"50px"} h={"50px"}  src={person} alt='opcion'></Image>
            <p>opcion 1</p>
          </VStack>
          <VStack>
            <Image w={"50px"} h={"50px"} src={person} alt='opcion'></Image>
            <p>opcion 2</p>
          </VStack>
        </HStack>
        <HStack>
          <VStack>
            <Image w={"50px"} h={"50px"}  src={person} alt='opcion'></Image>
            <p>opcion 1</p>
          </VStack>
          <VStack>
            <Image w={"50px"} h={"50px"} src={person} alt='opcion'></Image>
            <p>opcion 2</p>
          </VStack>
        </HStack>
        <h2>2. Agrega un comentario a tu voto (opcional)</h2>
        <Textarea  placeholder='escriba su comentario aqui.' />
        <h2>3. arrastre la boleta y sueltela en la urna para votar</h2>
        <HStack>
        <HStack border={"1px solid black"}>
        <Image w={"50px"} h={"50px"}  src={person} alt='opcion'></Image>
        <Image w={"50px"} h={"50px"}  src={person} alt='opcion'></Image>
        <Image w={"50px"} h={"50px"}  src={person} alt='opcion'></Image>
        </HStack>
        <Image w={"150px"} h={"100px"} src={urna} alt="urna"></Image>
        </HStack>
            <button className={style.Link} onClick={() => history.back()} >
          ATRAS
        </button>
        </div>
    );
}

export default Vote;