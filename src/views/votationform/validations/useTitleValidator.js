import { useEffect, useState } from "react";
import Votation from "../../../repositories/Votation";
function useTitleValidator() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    Votation.getAllTitles().then((res) => {
      setTitles(res.data.map(({ title }) => title));
    });
  }, []);

  return {
    tittleValidator: function (title) {
      if (titles.includes(title)) {
        return "Ya existe una votación con ese título";
      }
      return "";
    },
  };
}

export default useTitleValidator;
