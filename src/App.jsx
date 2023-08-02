import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./views/login/login";
import Votations from "./views/votations/votations";
import VotationDetail from "./views/votation/votationDetail";
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
        <Route path="/votations/:id" element={<VotationDetail />} />
        <Route path="/votations/votation/map" element={<VotationMap />} />
        <Route path="/votations/:id/vote" element={<Vote />} />
        <Route path="/votations/form" element={<Votationform />} />
        <Route path="/votations/:votationId/messages/:messageId" element={<Msgdetail />} />
        <Route path="/userinfo" element={<Userinfo />} />
        <Route path="/profile/complete" element={<ProfileComplete />} />
      </Routes>
    </>
  );
}

export default App;
