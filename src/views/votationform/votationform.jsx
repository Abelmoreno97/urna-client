import { useState } from "react";
import style from "./votationform.module.css";
import { Input, Button, Textarea, HStack } from "@chakra-ui/react";
import VotationOption from "../../components/votationOption/votationOption";

const Votationform = () => {
  const [optionsData, setOptionsData] = useState([{}, {}]);

  const addOption = () => {
    setOptionsData((prev) => [...prev, {}]);
  };

  const removeOption = () => {
    if (optionsData.length > 2) {
      setOptionsData((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div className={style.cont}>
      <h1>Votationform</h1> <br />
      <Input placeholder="Titulo de la votacion" />
      <Input placeholder="fecha de inicio" />
      <Input placeholder="fecha de finalizacion" />
      <h1>INGRESAR OPCIONES</h1> <br />
      <div
        style={{ width: "400px", display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        {optionsData.map((option, index) => (
          <VotationOption
            key={index}
            index={index}
            option={option}
            setOptionsData={setOptionsData}
          />
        ))}
      </div>
      <br />
      <HStack>
        <Button onClick={addOption}>Añadir</Button>
        <Button onClick={removeOption} bg={"red.400"}>
          Remover
        </Button>
      </HStack>
      <div style={{ width: "100%" }}>
        <h1>detalles</h1>
        <Textarea placeholder="proporcione contexto sobre la tematica de la votacion y detalles aqui." />
        <Button>ENVIAR</Button>
      </div>
      <button className={style.Link} onClick={() => history.back()}>
        ATRAS
      </button>
    </div>
  );
};

export default Votationform;
