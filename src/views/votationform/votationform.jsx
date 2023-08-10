import { useState, useRef } from "react";
import style from "./votationform.module.css";
import Gstyle from "./../../AppGlobal.module.css";
import {
  Input,
  Button,
  Textarea,
  HStack,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import VotationOption from "../../components/votationOption/votationOption";
import { formValidator } from "./validations/formValidator";
import useTitleValidator from "./validations/useTitleValidator";
import Votation from "../../repositories/Votation";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../layout/PageLayout/PageLayout";

const Votationform = () => {
  const navigate = useNavigate();

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

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    opening_date: "",
    closing_date: "",
    option0: "",
    option1: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const { tittleValidator } = useTitleValidator();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: formValidator(name, value, form),
    }));
    if (name === "title") {
      setErrors((prev) => ({ ...prev, [name]: tittleValidator(value) }));
    }
    setForm({ ...form, [name]: value });
  };

  const addOption = () => {
    setOptionsData((prev) => [...prev, { title: "", images: [] }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
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
    setOptionsData([
      { title: "", images: [] },
      { title: "", images: [] },
    ]);
    setForm({ title: "", description: "", opening_date: "", closing_date: "" });
    Votation.postVotation(formData).then((res) => {
      alert("Su solicitud fue enviada con exito!");
      navigate("/votations");
    });
  };

  return (
    <PageLayout>
      <h1>Votationform</h1>
      <div className={style.inputCont}>
        <Input
          required
          placeholder="Titulo de la votacion"
          name="title"
          onChange={handleChange}
        />
        <Input
          required
          placeholder="fecha de inicio"
          name="opening_date"
          type="datetime-local"
          onChange={handleChange}
        />
        <Input
          required
          placeholder="fecha de finalizacion"
          name="closing_date"
          type="datetime-local"
          onChange={handleChange}
        />
      </div>
      <div
        className={style.options}
        // style={{
        //   width: "400px",
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "start",
        // }}
      >
        <h1>INGRESAR OPCIONES</h1> <br />
        {optionsData.map((option, index) => (
          <VotationOption
            key={index}
            index={index}
            option={option}
            optionsData={optionsData}
            setOptionsData={setOptionsData}
            setErrors={setErrors}
          />
        ))}
        <HStack>
          <Button onClick={addOption}>Añadir</Button>
        </HStack>
      </div>

      <div className={style.inputCont}>
        <h1>detalles</h1>
        <Textarea
          required
          placeholder="proporcione contexto sobre la tematica de la votacion y detalles aqui."
          name="description"
          onChange={handleChange}
        />
        <>
          <Button
            colorScheme="red"
            isDisabled={
              Object.values(errors).some((value) => value !== "") ||
              Object.values(form).some((value) => value === "") ||
              Object.values(optionsData).some((option) => option.title === "")
            }
            onClick={onOpen}
          >
            Enviar
          </Button>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent bg={"gray.800"}>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Confirmar envio
                </AlertDialogHeader>

                <AlertDialogBody>esta seguro que desea enviar?</AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={handleSubmit} ml={3}>
                    Confirm
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </>
      </div>
      <button className={Gstyle.Link} onClick={() => history.back()}>
        ATRAS
      </button>
    </PageLayout>
  );
};

export default Votationform;
