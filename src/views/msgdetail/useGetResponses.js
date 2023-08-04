import { useEffect, useState } from "react";
import Vote from "../../repositories/Vote";
import { useParams } from "react-router";

export default function useGetResponses() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { voteId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    Vote.getWithResponses(voteId)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
    return () => setLoading(true);
  }, []);

  const addOrRemoveLike = (user_id) => {
    setData((prev) => {
      if (prev.likes.includes(user_id)) {
        return { ...prev, likes: prev.likes.filter((id) => id !== user_id) };
      } else {
        return { ...prev, likes: [...prev.likes, user_id] };
      }
    });
  };

  return { data, error, loading, addOrRemoveLike };
}
