import style from "./userinfo.module.css";
import Gstyle from "./../../AppGlobal.module.css";
// import { useAuth0 } from "@auth0/auth0-react";
import AlertDialogExample from "../../components/confirmlogout/confirmlogout";
import { cookie } from "../../utils";
import PageLayout from "../../layout/PageLayout/PageLayout";

const Userinfo = () => {
  const user = cookie.getObject("userData");
  return (
    <PageLayout>
      <h2>Userinfo</h2>
      <img src={user?.avatar} alt={user?.username}></img>
      <h2>{user?.username}</h2>
      <p>{user?.email}</p>
      <AlertDialogExample />
      <button className={Gstyle.Link} onClick={() => history.back()}>
        atras
      </button>
    </PageLayout>
  );
};

export default Userinfo;
