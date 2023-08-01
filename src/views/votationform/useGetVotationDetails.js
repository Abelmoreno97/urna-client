import { useEffect } from "react";
import Votation from "../../repositories/Votation";
import { useState } from "react";

function useGetVotationDetails(id) {
  const [votation, setVotation] = useState({});
  const [votes, setVotes] = useState([]);
  const [sortedOptions, setSortedOptions] = useState([]);

  useEffect(() => {
    Votation.getDetails(id).then((res) => {
      console.log(res);
      const { votes, votation } = res.data;
      setVotation(votation);
      setVotes(votes);

      const optionStatsObj = {};

      votes?.forEach((vote) => {
        const { option_title } = vote;
        if (optionStatsObj[option_title]) optionStatsObj[option_title].votes++;
        else optionStatsObj[option_title] = { votes: 1, ratio: null };
      });

      for (const option in optionStatsObj) {
        optionStatsObj[option].ratio = optionStatsObj[option].votes / votes?.length;
      }

      const { options } = votation;

      options?.forEach((option) => {
        option.stats = {
          votes: optionStatsObj[option.title]?.votes,
          ratio: optionStatsObj[option.title]?.ratio,
        };
      });

      setSortedOptions(options?.sort((a, b) => b?.stats?.votes - a?.stats?.votes));
    });
  }, []);

  return { votation, votes, sortedOptions };
}

export default useGetVotationDetails;
