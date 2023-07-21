import style from "./votationform.module.css";
import { Input, Button, Textarea } from "@chakra-ui/react";

const Votationform = () => {
  return (
    <div className={style.cont}>
      <h1>Votationform</h1> <br />
      <Input placeholder="Titulo de la votacion" />
      <h1>INGRESAR OPCIONES</h1> <br />
      <div style={{width: "400px", display: "flex", flexDirection: "column", alignItems: "start" }}>
      <div style={{width: "250px"}}>
        <h2>OPCION 1</h2> <br />
        <Input placeholder="Titulo de la votacion" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "10px",
            gap: "10px",
          }}
        >
          <Button>Add avatar</Button> <Button>Add detail</Button>
        </div>
      </div>
      <div style={{width: "250px"}}>
        <h2>OPCION 2</h2> <br />
        <Input placeholder="Titulo de la votacion" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            margin: "10px",
            gap: "10px",
          }}
        >
          <Button>Add avatar</Button> <Button>Add detail</Button>
        </div>
      </div>
      </div>
      <br/>
      <Button>Add option</Button>
      <div style={{width: "100%"}}>
        <h1>detalles</h1>
        <Textarea  placeholder='proporcione contexto sobre la tematica de la votacion y detalles aqui.' />
        <Button>ENVIAR</Button>
      </div>
      <button className={style.Link} onClick={() => history.back()}>
        atras
      </button>
    </div>
  );
};

export default Votationform;
