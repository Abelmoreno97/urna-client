import { BACKEND_BASE_URL } from "../config/envs";
export default {
  send: (responseData) =>
    fetch(`${BACKEND_BASE_URL}/responses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ responseData }),
      credentials: "include",
    }).then((res) => res.json()),
  sendLike: (response_id) =>
    fetch(`${BACKEND_BASE_URL}/responses/${response_id}/likes`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => res.json()),
};
