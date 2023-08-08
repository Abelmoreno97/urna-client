import {BACKEND_BASE_URL} from "./../../config/envs";
import Gstyle from "./../../AppGlobal.module.css";
import PageLayout from "./../../layout/PageLayout/PageLayout";
import { VStack } from "@chakra-ui/react";

const Login = () => {
  return (
    <PageLayout>
      <VStack>
      <p>VOTO LIBRE APP</p> <br/>
      <p>POLITICA, DEPORTES, ESPECTACULO Y MAS...</p> <br/>
      <p>brinda apoyo a tu favorito y abre el debate con a tu opinión</p>
      </VStack>
      <a href={BACKEND_BASE_URL + "/auth/login"} className={Gstyle.Link}>
        Login
      </a>
    </PageLayout>
  );
};

export default Login;
