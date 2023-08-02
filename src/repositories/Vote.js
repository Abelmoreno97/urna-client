const baseURL = "http://localhost:3001";
export default {
  getResponses: (id) => fetch(baseURL + "/responses/vote/" + id, {method:"GET",credentials:"include"}).then((res) => res.json()),
};
