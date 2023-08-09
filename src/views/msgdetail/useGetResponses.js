import { useEffect, useState } from "react";
import Vote from "../../repositories/Vote";
import { useParams } from "react-router";

export default function useGetResponses() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { voteId } = useParams();
  const [data, setData] = useState({});

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
  const addOrRemoveResponseLike = (response_id, user_id) => {
    const { responses } = data;
    const newResponses = responses.map((response) => {
      if (response._id !== response_id) return response;
      return {
        ...response,
        likes: response.likes.includes(user_id)
          ? response.likes.filter((id) => id !== id)
          : [...response.likes, user_id],
      };
    });

    setData((prev) => ({ ...prev, responses: newResponses }));
  };

  return { data, error, loading, addOrRemoveLike, addOrRemoveResponseLike };
}
