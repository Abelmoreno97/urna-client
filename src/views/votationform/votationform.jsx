import { useState } from "react";
import style from "./votationform.module.css";
import Gstyle from "./../../AppGlobal.module.css";
import { Input, Button, Textarea, HStack } from "@chakra-ui/react";
import VotationOption from "../../components/votationOption/votationOption";
import { BACKEND_BASE_URL } from "../../config/envs";

const Votationform = () => {
  const [optionsData, setOptionsData] = useState([
    { title: "", images: [] },
    { title: "", images: [] },
  ]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    opening_date: "",
    closing_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setForm({ ...form, [name]: value });
  }

  const addOption = () => {
    setOptionsData((prev) => [...prev, { title: "", images: [] }]);
  };

  const removeOption = () => {
    if (optionsData.length > 2) {
      setOptionsData((prev) => prev.slice(0, -1));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_id", "c2632c9f-7d86-4039-8867-526ed2a6f0db");
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("opening_date", form.opening_date);
    formData.append("closing_date", form.closing_date);

    optionsData.forEach((option, index) => {
      formData.append(`option${index + 1}Title`, option.title);
      option.images.forEach((image) => {
        formData.append(`option${index + 1}Image`, image);
      });
    });

    fetch(`${BACKEND_BASE_URL}/voting`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className={Gstyle.cont}>
      <h1>Votationform</h1> <br />
      <Input placeholder="Titulo de la votacion" name="title" onChange={handleChange} />
      <Input placeholder="fecha de inicio" name="opening_date" type="datetime-local" onChange={handleChange} />
      <Input placeholder="fecha de finalizacion" name="closing_date" type="datetime-local" onChange={handleChange} />
      <h1>INGRESAR OPCIONES</h1> <br />
      <div
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
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
        <Textarea
          placeholder="proporcione contexto sobre la tematica de la votacion y detalles aqui."
          name="description"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Enviar</Button>
      </div>
      <button className={Gstyle.Link} onClick={() => history.back()}>
        ATRAS
      </button>
    </div>
  );
};

export default Votationform;
