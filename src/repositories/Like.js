const baseURL = "http://localhost:3001";
export default {
  sendVoteLike: (vote_id) =>
    fetch(baseURL + "/likes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vote_id }),
      credentials: "include",
    }).then((res) => res.json()),
};
