const baseURL = "http://localhost:3001";
export default {
  postUser: (profileInfo) =>
    fetch(baseURL + "/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profileInfo }),
    }).then((res) => res.json()),
  logout: () =>
    fetch(baseURL + "/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => res.json()),
};
