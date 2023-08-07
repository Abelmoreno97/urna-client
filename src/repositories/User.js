import {BACKEND_BASE_URL} from "./../config/envs";

export default {
  postUser: (profileInfo) =>
    fetch(BACKEND_BASE_URL + "/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileInfo }),
    }).then((res) => res.json()),
  logout: () =>
    fetch(BACKEND_BASE_URL + "/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => res.json()),
};
