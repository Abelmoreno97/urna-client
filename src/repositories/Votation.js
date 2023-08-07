import { BACKEND_BASE_URL } from "../config/envs";

export default {
  getAll: () => fetch(BACKEND_BASE_URL + "/voting").then((res) => res.json()),
  getAllTitles: () => fetch(BACKEND_BASE_URL + "/voting/titles").then((res) => res.json()),
  getDetails: (id) =>
    fetch(BACKEND_BASE_URL + "/voting/" + id, { method: "GET", credentials: "include" }).then((res) =>
      res.json()
    ),
  postVotation: (formData) => fetch(BACKEND_BASE_URL + "/voting", {method: "POST", body: formData,credentials: "include",
  }).then((res) => res.json())
};
