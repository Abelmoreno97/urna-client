import React, { useEffect, useState } from "react";
import PageLayout from "../../layout/PageLayout/PageLayout";
import { io } from "socket.io-client";
import { BACKEND_BASE_URL } from "../../config/envs";

const socket = io(BACKEND_BASE_URL, {
  withCredentials: true,
});

function SocketIo() {
  const [messages, setMessages] = useState([]);

  const handleClick = () => {
    socket.emit("message", { body: "mensaje hardcodeado" });
  };

  useEffect(() => {
    socket.emit("joinRoom", { room: "room", username: "stefano" }, (cbArg) => {
      console.log(cbArg);
    });

    socket.on("joinRoom_response", (arg) => {
      console.log(arg);
    });

    socket.on("success", (msg) => {
      console.log("estado de la conexion =>", msg);
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    socket.on("messageFromServer", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    socket.on("error", (error) => {
      console.log(error);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <PageLayout>
      <h2>Message List</h2>
      <ul>
        {messages.map((message, i) => (
          <li key={message?.id || i}>
            <p>{message.body}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Enviar Mensaje</button>
    </PageLayout>
  );
}

export default SocketIo;
