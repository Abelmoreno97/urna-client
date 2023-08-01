import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./views/login/login";
import Votations from "./views/votations/votations";
import VotationMessage from "./views/votation/votationMessage";
import VotationMap from "./views/votation/votationMap";
import Vote from "./views/vote/vote";
import Userinfo from "./views/userinfo/userinfo";
import Votationform from "./views/votationform/votationform";
import Msgdetail from "./views/msgdetail/msgdetail";
import ProfileComplete from "./views/profilecomplete/profilecompelte";

function App() {
  const loc = useLocation();
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/votations" element={<Votations />} />
        <Route path="/votation/:id" element={<VotationMessage />} />
        <Route path="/votations/votation/map" element={<VotationMap />} />
        <Route path="/votation/:id/vote" element={<Vote />} />
        <Route path="/votations/form" element={<Votationform />} />
        <Route path="/votations/votation/messages/msgdetail" element={<Msgdetail />} />
        <Route path="/userinfo" element={<Userinfo />} />
        <Route path="/profile/complete" element={<ProfileComplete />} />
      </Routes>
    </>
  );
}

export default App;
