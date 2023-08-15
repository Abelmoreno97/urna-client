import { useEffect } from "react";
import Votation from "../../repositories/Votation";
import { useDispatch, useSelector } from "react-redux";
import { setData, setError, setStatus } from "../../redux/features/votationDetailSlice";

function useGetVotationDetails(id) {
  const dispatch = useDispatch();
  const { data, error, status } = useSelector((state) => state.votationDetail);

  useEffect(() => {
    if (data?.votation?._id !== id) {
      dispatch(setStatus("loading"));
      Votation.getDetails(id)
        .then((res) => {
          const { votes, votation, alreadyVoted } = res.data;
          const optionStatsObj = {};

          votes?.forEach((vote) => {
            const { option_title } = vote;
            if (optionStatsObj[option_title]) optionStatsObj[option_title].votes++;
            else optionStatsObj[option_title] = { votes: 1, ratio: null };
          });

          for (const option in optionStatsObj) {
            optionStatsObj[option].ratio = (optionStatsObj[option].votes / votes?.length) * 100;
          }

          const { options } = votation;
          for (const option of options) {
            option.stats = {
              votes: optionStatsObj[option.title.trim()]?.votes,
              ratio: optionStatsObj[option.title.trim()]?.ratio,
            };
          }
          const sortedOptions = options?.sort((a, b) => b.stats.votes - a.stats.votes);

          dispatch(setData({ votes, votation, sortedOptions, alreadyVoted }));
        })
        .catch((err) => {
          console.log(err);
          dispatch(setError(true));
        });
    }
  }, []);
  return { data, error, status };
}

export default useGetVotationDetails;
