import axios from "axios";

import { AUTORIZATION_KEY } from "../shared/constants/autorization";

export const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: localStorage.getItem(AUTORIZATION_KEY),
    "Content-Type": "application/json",
  },
});
