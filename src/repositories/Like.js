import { BACKEND_BASE_URL } from "../config/envs";

export default {
  sendVoteLike: (vote_id) =>
    fetch(`${BACKEND_BASE_URL}/votes/${vote_id}/likes`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => res.json()),
};
