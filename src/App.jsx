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
import Navbar from "./components/navbar/navbar";

function App() {
  const loc = useLocation();
  return (
    <>
      <Routes>
        {/* <Route path="/votations" element={<Navbar />} /> */}
        <Route exact path="/" element={<Login />} />
        <Route exact path="/votations" element={<Votations />} />
        <Route path="/votations/votation/messages" element={< VotationMessage/>} />
        <Route path="/votations/votation/map" element={< VotationMap/>}/>
        <Route path="/votations/votation/vote" element={<Vote/> }/>
        <Route path="/votations/form" element={<Votationform />} />
        <Route path="/votations/votation/messages/msgdetail" element={<Msgdetail />}/>
        <Route path="/userinfo" element={<Userinfo />}/>
      </Routes>
    </>
  );
}

export default App;
