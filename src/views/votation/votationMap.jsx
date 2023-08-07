import Votebar from "../../components/votebar/votebar";
import style from "./votation.module.css";
import Navbar from "../../components/navbar/navbar";
import Gstyle from "./../../AppGlobal.module.css";
import { useParams } from "react-router";
import PageLayout from "../../layout/PageLayout/PageLayout";

const VotationMap = () => {
  const { votationId } = useParams();
  return (
    <div>
      <PageLayout>
        <h1>Votation</h1>
        <Votebar />
        <div>
          <div className={style.votecont}>
            <img
              className={style.mapcard}
              src="https://img.lovepik.com/photo/20230422/medium/lovepik-map-of-argentina-political-map-of-argentia-with-the-several-provinces-photo-image_352373389.jpg"
              alt="mapa"
            ></img>
          </div>
        </div>
      </div>
      </PageLayout>
      <Navbar votationId={votationId} />
    </div>
  );
};

export default VotationMap;
