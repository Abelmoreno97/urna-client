import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./views/login/login";
import Votations from "./views/votations/votations";
import VotationMessage from "./views/votation/votationMessage";
import VotationMap from "./views/votation/votationMap";
import Vote from "./views/vote/vote";
import Userinfo from "./views/userinfo/userinfo";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/votations" element={<Votations />} />
        <Route path="/votations/votation/messages" element={< VotationMessage/>} />
        <Route path="/votations/votation/map" element={< VotationMap/>}/>
        <Route path="/votations/votation/vote" element={<Vote/> }/>
        <Route path="/userinfo" element={<Userinfo />}/>
      </Routes>
    </>
  );
}

export default App;
