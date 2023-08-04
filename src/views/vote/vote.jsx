import { HStack, Image, VStack, Textarea, Button } from "@chakra-ui/react";
import style from "./vote.module.css";
import Gstyle from "./../../AppGlobal.module.css";
import person from "../../assets/person.svg";
import urna from "../../assets/urna.png";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import VoteRepository from "../../repositories/Vote";

const Vote = () => {
  const [selection, setSelection] = useState();
  const [input, setInput] = useState("");
  const { data } = useSelector((state) => state.votationDetail);
  const { sortedOptions } = data;
  const navigate = useNavigate();

  const { id: voting_id } = useParams();

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length < 255) setInput(e.target.value);
  };

  const loadingModal = useRef();
  const success = useRef();

  let loading = false;
  const handleSubmit = () => {
    if (selection.title && !loading) {
      loadingModal.current.style.display = "grid";
      loading = true;
      const voteData = { voting_id, option_title: selection.title, comment: input };
      VoteRepository.create(voteData).then((res) => {
        loadingModal.current.style.display = "none";
        success.current.style.display = "block";
        setTimeout(() => {
          navigate(-1);
        }, 1000);
      });
    }
  };

  return (
    <div className={Gstyle.cont}>
      <div ref={loadingModal} className={style.loading_modal}>
        <p className={style.loading_span}>Cargando....</p>
      </div>
      <div ref={success} className={style.success_container}>
        <span className={style.success_text}>¡Su voto fué registrado con éxito!</span>
      </div>
      <h1>Vote</h1>
      <h2>Elige tu opcion</h2>
      <HStack>
        {sortedOptions?.map((option, i) => (
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
      <Textarea onChange={handleChange} placeholder="escriba su comentario aqui." />
      <h2>3. Verifique su boleta y confirme su voto</h2>
      <HStack>
        <HStack border={"1px solid black"}>
          {selection?.images?.length > 0
            ? selection?.images?.map((image, i) => (
                <Image key={i} w={"50px"} h={"50px"} src={image} alt={"preview" + i}></Image>
              ))
            : selection && <Image w={"50px"} h={"50px"} src={person} alt={"preview"}></Image>}
        </HStack>
        <VStack>
          <Image w={"150px"} h={"100px"} src={urna} alt="urna"></Image>
          {selection?.title ? (
            <button className={Gstyle.Link} onClick={handleSubmit}>
              CONFIRMAR VOTO
            </button>
          ) : (
            <button className={Gstyle.Link__disabled} disabled>
              CONFIRMAR VOTO
            </button>
          )}
        </VStack>
      </HStack>
      <button className={Gstyle.Link} onClick={() => history.back()}>
        ATRAS
      </button>
    </div>
  );
};

export default Vote;
