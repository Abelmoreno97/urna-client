import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./views/login/login";
import Votations from "./views/votations/votations";
import Votation from "./views/votation/votation";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/votations" element={<Votations />} />
        <Route path="/votation" element={<Votation />} />
      </Routes>
    </>
  );
}

export default App;
