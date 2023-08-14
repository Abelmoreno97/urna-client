import { BACKEND_BASE_URL } from "../config/envs";

import { socket } from "@src/services/socketService.js";

export default {
  create: (responseData, cb) => {
    socket.emit("response:create", responseData, cb);
  },
  sendLike: (response_id) =>
    fetch(`${BACKEND_BASE_URL}/responses/${response_id}/likes`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => res.json()),
};
