const baseURL = "http://localhost:3001";
export default {
  getAll: () => fetch(baseURL + "/voting").then((res) => res.json()),
  getAllTitles: () => fetch(baseURL + "/voting/titles").then((res) => res.json()),
  getDetails: (id) =>
    fetch(baseURL + "/voting/" + id, { method: "GET", credentials: "include" }).then((res) =>
      res.json()
    ),
  postVotation: (formData) => fetch(baseURL + "/voting", {method: "POST", body: formData,credentials: "include",
  }).then((res) => res.json())
};
