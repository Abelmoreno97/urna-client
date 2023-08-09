import { BACKEND_BASE_URL } from "./../../config/envs";
import Gstyle from "./../../AppGlobal.module.css";
import PageLayout from "./../../layout/PageLayout/PageLayout";
import { Box, VStack } from "@chakra-ui/react";
import Carousel from "../../components/carousel/Caroucel";

const Login = () => {
  return (
    <PageLayout>
      <VStack
        overflow={"hidden"}
        w={["400px", "500px", "700px", "900px", "900px"]}
      >
        <Carousel />
      </VStack>
      <VStack h={"600px"} justify={"space-around"} position={"absolute"}>
        <p>VOTO LIBRE APP</p> <br />
        <p>POLITICA, DEPORTES, ESPECTACULO Y MAS...</p> <br />
        <p>Brinda apoyo a tu favorito y abre el debate con tu opinión</p>
        <a href={BACKEND_BASE_URL + "/auth/login"} className={Gstyle.Link}>
          Login
        </a>
      </VStack>
    </PageLayout>
  );
};

export default Login;
