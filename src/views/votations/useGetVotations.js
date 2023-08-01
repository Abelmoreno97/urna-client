import { useEffect } from "react";

import Votation from "../../repositories/Votation";
import { useDispatch, useSelector } from "react-redux";
import { setData, setError, setStatus } from "../../redux/features/votationsSlice";

export function useGetVotations() {
  const { data, status, error } = useSelector((state) => state.votations);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatus("loading"));
    Votation.getAll()
      .then((res) => {
        dispatch(setData(res.data));
      })
      .catch((err) => dispatch(setError(err)));
  }, []);

  return { data, status, error };
}
