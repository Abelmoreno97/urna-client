import { BACKEND_BASE_URL } from "../config/envs";
import { socket } from "@src/services/socketService";

export default {
  getWithResponses: (id) =>
    fetch(BACKEND_BASE_URL + "/votes/" + id, { method: "GET", credentials: "include" }).then(
      (res) => res.json()
    ),
  create: (voteData) =>
    fetch(BACKEND_BASE_URL + "/votes", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ voteData }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json()),
  sendLike: (vote_id) =>
    fetch(`${BACKEND_BASE_URL}/votes/${vote_id}/likes`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => res.json()),

  like: (vote_id, cb) => {
    socket.emit("vote:like", { vote_id }, cb);
  },
  dislike: (vote_id, cb) => {
    socket.emit("vote:dislike", { vote_id }, cb);
  },
};
