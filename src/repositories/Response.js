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
};
