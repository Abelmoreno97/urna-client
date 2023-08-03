const baseURL = "http://localhost:3001";
export default {
  sendVoteLike: (vote_id) =>
    fetch(`${baseURL}/votes/${vote_id}/likes`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => res.json()),
};
