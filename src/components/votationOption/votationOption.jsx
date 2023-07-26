import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

function VotationOption({ option, index, setOptionsData }) {
  const { title } = option;

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setOptionsData((prev) => [
      ...prev.slice(0, index),
      { ...prev[index], [name]: value },
      ...prev.slice(index + 1),
    ]);
  };

  const [file, setFile] = useState();
  const [previewURL, setPreviewURL] = useState("");

  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const objectURL = URL.createObjectURL(selectedFile);
      setPreviewURL(objectURL);
      setFile(selectedFile);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    fetch("http://localhost:3001/upload", {
      method: "POST",

      body: formData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div style={{ width: "250px" }}>
      <h2>Opción {index + 1}</h2> <br />
      <Input
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
        {/* <Button>Add avatar</Button> <Button>Add detail</Button> */}
      </div>
    </div>
  );
}

export default VotationOption;
