import { useEffect, useState } from "react";
import Votation from "../../../services/Votation";
function useTitleValidator() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    Votation.getAllTitles().then((data) => {
      setTitles(data);
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
