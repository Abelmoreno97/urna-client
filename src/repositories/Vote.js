const baseURL = "http://localhost:3001";
export default {
  getWithResponses: (id) =>
    fetch(baseURL + "/votes/" + id, { method: "GET", credentials: "include" }).then((res) =>
      res.json()
    ),
  create: (voteData) =>
    fetch(baseURL + "/votes", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ voteData }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json()),
};
