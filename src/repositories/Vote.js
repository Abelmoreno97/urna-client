import { BACKEND_BASE_URL } from "../config/envs";

export default {
  getWithResponses: (id) =>
    fetch(BACKEND_BASE_URL + "/votes/" + id, { method: "GET", credentials: "include" }).then((res) =>
      res.json()
    ),
  create: (voteData) =>
    fetch(BACKEND_BASE_URL + "/votes", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ voteData }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json()),
};
