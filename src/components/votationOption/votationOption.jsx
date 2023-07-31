import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { optionValidator, refreshOptionErrors } from "./validations/optionValidator";

function VotationOption({ option, index, optionsData: allOptions, setOptionsData, setErrors }) {
  const { title, images } = option;

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setErrors((prev) => {
      const { title, description, opening_date, closing_date, ...optionErrors } = prev;
      return {
        ...prev,
        ...optionValidator({ index, title: value, allOptions, optionErrors }),
      };
    });
    setOptionsData((prev) => [
      ...prev.slice(0, index),
      { ...prev[index], [name]: value },
      ...prev.slice(index + 1),
    ]);
  };

  const [previewURL, setPreviewURL] = useState({});

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    const { name } = e.target;
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setPreviewURL((prev) => {
        return { ...prev, [name]: objectURL };
      });
      setOptionsData((prev) => {
        const newImages = prev[index].images;
        newImages[name === "image1" ? 0 : 1] = selectedFile;
        return [
          ...prev.slice(0, index),
          { ...prev[index], images: newImages },
          ...prev.slice(index + 1),
        ];
      });
    }
  };
  const handleRemoveOption = () => {
    const newOptionsData = [...allOptions.filter((option, i) => i != index)];
    setOptionsData(() => newOptionsData);
    setErrors((prev) => {
      const { title, description, opening_date, closing_date } = prev;
      return {
        title,
        description,
        opening_date,
        closing_date,
        ...refreshOptionErrors(newOptionsData),
      };
    });
  };

  const handleRemoveImage = (name) => {
    setPreviewURL((prev) => {
      const newPreviewURL = { ...prev };
      delete newPreviewURL[name];
      return newPreviewURL;
    });
    setOptionsData((prev) => {
      const newImages = prev[index].images;
      delete newImages[name === "image1" ? 0 : 1];
      return [
        ...prev.slice(0, index),
        { ...prev[index], images: newImages },
        ...prev.slice(index + 1),
      ];
    });
  };

  return (
    <div style={{ width: "250px" }}>
      <h2>Opción {index + 1}</h2> <br />
      <Button onClick={handleRemoveOption}>X</Button>
      <Input
        required
        placeholder="Titulo de la votacion"
        value={title}
        name="title"
        onChange={handleOnChange}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: "10px",
          gap: "10px",
        }}
      >
        <label htmlFor={`image1-${index}`} style={{ cursor: "pointer" }}>
          Imagen 1
        </label>
        <input
          id={`image1-${index}`}
          type="file"
          name="image1"
          style={{ display: "none" }}
          onChange={handleFile}
        />
        <label htmlFor={`image2-${index}`} style={{ cursor: "pointer" }}>
          Imagen 2
        </label>
        <input
          id={`image2-${index}`}
          type="file"
          name="image2"
          style={{ display: "none" }}
          onChange={handleFile}
        />
      </div>
      <p>Vistas previas</p>
      <HStack>
        <div>
          <img style={{ width: "45%" }} src={previewURL.image1} />
          <button onClick={() => handleRemoveImage("image1")}>X</button>
        </div>
        <div>
          <img style={{ width: "45%" }} src={previewURL.image2} />
          <button onClick={() => handleRemoveImage("image2")}>X</button>
        </div>
      </HStack>
    </div>
  );
}

export default VotationOption;
