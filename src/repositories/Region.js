import { BACKEND_BASE_URL } from "../config/envs";

export default {
  getAll: () => fetch(BACKEND_BASE_URL + "/regions")
  .then((res) => res.json())
};
