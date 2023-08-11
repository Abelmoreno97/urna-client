import { Link } from "react-router-dom";
import VotationDetail from "../votation/votationDetail";
import style from "./votations.module.css";
import Gstyle from "./../../AppGlobal.module.css";
import { HStack, Image, Text, VStack, Heading } from "@chakra-ui/react";
import { useGetVotations } from "./useGetVotations";
import { formatDate } from "../../utils/date";
import PageLayout from "../../layout/PageLayout/PageLayout";
import { cookie } from "../../utils";

const Votations = () => {
  const user = cookie.getObject("userData");
  const { data, status, error } = useGetVotations();
  if (error) return <h2>Error</h2>;
  if (status == "loading") return <h2>Loader</h2>;
  // if (data.length == 0) return <h2>No hay votaciones activas</h2>;
  return (
    <div>
      <PageLayout>
        <h1>Votations active</h1>
        <br />
        {data.length == 0 && <h2>No hay votaciones activas</h2>}
        <VStack  w={["340px","440px","640px","840px","840px"]} className={style.mapcont}>
          {data.map((votation, i) => (
            <Link
              key={i}
              style={{ textDecoration: "none", color: "rgb(240, 240, 240)" }}
              to={`/votations/${votation._id}`}
              element={<VotationDetail />}
            >
              <HStack
                borderRadius={"10px"}
                border={"1px solid black"}
                p={"5px"}
                w={["300px","400px","600px","800px","800px"]}
                bgImage={
                  "url(https://images.daznservices.com/di/library/DAZN_News/9/c6/leo-messi-balon-de-oro_1eicer0idlem51rbi8fblo226b.jpg?t=-1454575414&quality=60&w=1280&h=720)"
                }
                bgSize={"cover"}
              >
                <VStack
                  w={"100%"}
                  p={"10px"}
                  borderRadius={"10px"}
                  border={"1px solid black"}
                  alignItems={"flex-start"}
                  backgroundColor={"blackAlpha.500"}
                  _hover={{
                    backgroundColor: "blackAlpha.800",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Heading>{votation.title} </Heading>
                  <Text>{votation.description}</Text>
                  <br />
                  <p>
                    Apertura: {formatDate(votation.opening_date)} Cierre:{" "}
                    {formatDate(votation.closing_date)}
                  </p>
                </VStack>
              </HStack>
            </Link>
          ))}
        </VStack>

        <Link className={Gstyle.Link} to="/votations/form">
          solicitar votacion
        </Link>
      </PageLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
        }}
      >
        <Link className={Gstyle.Link} to="/userinfo">
          <Image
            borderRadius="50%"
            w={"30px"}
            h={"30px"}
            src={user?.avatar}
            alt={user?.name}
          ></Image>{" "}
          <p>userinfo</p>
        </Link>
      </div>
    </div>
  );
};

export default Votations;
