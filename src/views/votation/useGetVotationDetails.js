import { useEffect } from "react";
import Votation from "../../repositories/Votation";
import { useDispatch } from "react-redux";
import { setData, setError, setStatus } from "../../redux/features/votationDetailSlice";

function useGetVotationDetails(id) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatus("loading"));
    Votation.getDetails(id)
      .then((res) => {
        const { votes, votation } = res.data;
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

        const sortedOptions = options?.sort((a, b) => b?.stats?.votes - a?.stats?.votes);

        dispatch(setData({ votes, votation, sortedOptions }));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError(true));
      });
  }, []);
}

export default useGetVotationDetails;
